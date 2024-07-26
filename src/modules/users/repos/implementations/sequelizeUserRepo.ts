import { IUserRepo } from '../userRepo';
import { UserName } from '../../domain/userName';
import { User } from '../../domain/user';
import { UserMap } from '../../mappers/userMap';
import { UserEmail } from '../../domain/userEmail';
import { raw } from 'body-parser';

export class SequelizeUserRepo implements IUserRepo {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  async exists(userEmail: UserEmail): Promise<boolean> {
    const BaseUserModel = this.models.BaseUser;
    const baseUser = await BaseUserModel.findOne({
      where: {
        user_email: userEmail.value,
      },
    });
    return !!baseUser === true;
  }

  async getUserByUserName(userName: UserName | string): Promise<User> {
    const BaseUserModel = this.models.BaseUser;
    const baseUser = await BaseUserModel.findOne({
      where: {
        username: userName instanceof UserName ? (<UserName>userName).value : userName,
      },
    });
    if (!!baseUser === false) throw new Error('User not found.');
    return UserMap.toDomain(baseUser);
  }

  async getUserByUserId(userId: string): Promise<User> {
    const BaseUserModel = this.models.BaseUser;
    const baseUser = await BaseUserModel.findOne({
      where: {
        base_user_id: userId,
      },
    });
    if (!!baseUser === false) throw new Error('User not found.');
    return UserMap.toDomain(baseUser);
  }

  async getPostsCommentsByUsername(userName: string): Promise<User> {
    const response = await this.models.sequelize.query(
      `SELECT
    b.base_user_id,
    b.username,
    b.user_email,
    COALESCE(COUNT(DISTINCT c.comment_id), 0) AS comment_count,
    COALESCE(COUNT(DISTINCT p.post_id), 0) AS post_count
    FROM
    data_dev.base_user b
    LEFT JOIN data_dev.member m ON b.base_user_id = m.member_base_id
    LEFT JOIN data_dev.comment c ON m.member_id = c.member_id
    LEFT JOIN data_dev.post p ON m.member_id = p.member_id
    WHERE
    b.username = :userName
    GROUP BY 
    b.base_user_id,
    b.username;`,
      {
        replacements: { userName },
        type: this.models.sequelize.QueryTypes.SELECT,
      },
    );
    return response[0];
  }

  async getUserWithMoreCommentsPosts(): Promise<User> {
    const response = await this.models.sequelize.query(
      `SELECT 
      b.base_user_id, b.username, COUNT(c.comment_id) AS rank_comment_count, (select COUNT(post_id) from data_dev.post p where 
      m.member_id = p.member_id) AS rank_post_count
      FROM data_dev.base_user b
      JOIN data_dev.member m ON b.base_user_id = m.member_base_id
      JOIN data_dev.comment c ON m.member_id = c.member_id
      GROUP BY b.base_user_id, b.username, m.member_id
      ORDER BY rank_comment_count DESC
      LIMIT 1;`,
    );
    console.log(JSON.stringify(response, null, 2));
    return response[0];
  }

  async save(user: User): Promise<void> {
    const UserModel = this.models.BaseUser;

    const exists = await this.exists(user.email);
    const rawSequelizeUser = await UserMap.toPersistence(user);

    if (!exists) {
      await UserModel.create(rawSequelizeUser);
    } else {
      await UserModel.update(rawSequelizeUser, { where: { user_email: user.email.value } });
    }

    return;
  }
  async getUserInfo(
    userName: string,
  ): Promise<{ userByUsername: User; userWithMoreComments: User }> {
    const userByUsername = await this.getPostsCommentsByUsername(userName);
    const userWithMoreComments = await this.getUserWithMoreCommentsPosts();

    return { userByUsername, userWithMoreComments };
  }

  async averageCommentsByDate(date: string): Promise<any> {
    const response = await this.models.sequelize.query(
      `SELECT 
      ROUND(AVG(comment_count), 1) AS average_comments_per_post
    FROM (
      SELECT 
        post_id, 
       ROUND(COUNT(comment_id), 1) AS comment_count
      FROM 
        comment
      WHERE 
        DATE(created_at) = "${date}"
      GROUP BY 
        post_id
    ) AS averageCommentsByDate;`,
    );
    console.log(JSON.stringify(response, null, 2));
    return response[0];
  }
  // aguardar confirmação do PO em relação à média diária dePosts
  async averagePostsByDate(date: string): Promise<any> {
    const response = await this.models.sequelize.query(
      `SELECT
        COUNT(post_id) AS total_posts, 
        COUNT(DISTINCT member_id) As total_members,
        ROUND(COUNT(post_id) / COUNT(DISTINCT member_id), 1) AS average_posts_per_member
      FROM
        post
      WHERE
      DATE(created_at) = "${date}"`,
    );
    console.log(JSON.stringify(response, null, 2));
    return response[0];
  }

  async getPostTitleWithMostCommentsOnDate(date: string): Promise<any> {
    const response = await this.models.sequelize.query(
      `SELECT p.title
       FROM post p
       LEFT JOIN comment c ON p.post_id = c.post_id AND DATE(c.created_at) = :date
       WHERE c.comment_id IS NOT NULL
       GROUP BY p.post_id, p.title
       ORDER BY COUNT(c.comment_id) DESC
       LIMIT 1;`,
      {
        replacements: { date },
        type: this.models.sequelize.QueryTypes.SELECT,
      },
    );
    if (response.length === 0) {
      return { title: null }; // Or any other default value
    } else {
      return response[0];
    }
  }
    async getTopThreeByDate(date: string): Promise<any> {
      const response = await this.models.sequelize.query(
        `SELECT
          b.username,
          COUNT(c.comment_id) AS comment_count
        FROM
          data_dev.comment c
          JOIN data_dev.member m ON c.member_id = m.member_id
          JOIN data_dev.base_user b ON m.member_base_id = b.base_user_id
        WHERE
          DATE(c.created_at) = :date
        GROUP BY
          b.base_user_id,
          b.username
        ORDER BY
          comment_count DESC, b.username ASC
        `,
        {
          replacements: { date: date },
          type: this.models.sequelize.QueryTypes.SELECT,
        }
      );
        const sortedResponse = response.sort((a: any, b: any) => {
        if (a.comment_count !== b.comment_count) {
          return b.comment_count - a.comment_count; // Sort by comment_count
        } else {
          return a.username.localeCompare(b.username); // Sort alphabetically if counts are equal
        }
      });
        const usernames = sortedResponse.map((entry: any) => entry.username);
      
        const obj: any = {
        usernameOne: usernames[0] || null,
        usernameTwo: usernames[1] || null,
        usernameThree: usernames[2] || null,
      };
    
      return obj;
    }



  async getUserWithoutCommentsandPostsbyDate(date: string): Promise<any> {
    const response = await this.models.sequelize.query(
      `SELECT b.base_user_id, b.username
      FROM data_dev.base_user b
      WHERE NOT EXISTS (
          SELECT 1
          FROM data_dev.member m
          LEFT JOIN data_dev.comment c ON m.member_id = c.member_id AND DATE(c.created_at) = "${date}"
          LEFT JOIN data_dev.post p ON m.member_id = p.member_id AND DATE(p.created_at) = "${date}"
          WHERE m.member_base_id = b.base_user_id
          AND (c.comment_id IS NOT NULL OR p.post_id IS NOT NULL)
      );`,
    );
    console.log(JSON.stringify(response, null, 2));
    return response[0];
  }

  async percentageOfPostsWithoutCommentsByDate(date: string): Promise<any> {
    const response = await this.models.sequelize.query(
      `SELECT 
          COUNT(*) AS total_posts_for_the_day, 
          SUM(CASE WHEN total_num_comments = 0 THEN 1 ELSE 0 END) AS posts_without_comments,
          ROUND(
              (SUM(CASE WHEN total_num_comments = 0 THEN 1 ELSE 0 END) / COUNT(*)) * 100
          ) AS percentage_without_comments
       FROM 
          post
       WHERE 
          DATE(created_at) = :date`, 
      {
        replacements: { date: date }, 
        type: this.models.sequelize.QueryTypes.SELECT,
      },
    );
    console.log(JSON.stringify(response, null, 2));
    return response[0]; 
  }

  async getStatistics(date: string, statType: string): Promise<any> {
    const statisticsObject: any = {};
  
    switch (statType) {
      case 'averageComments':
        statisticsObject.averageCommentsByDate = await this.averageCommentsByDate(date);
        break;
      case 'averagePosts':
        statisticsObject.averagePostsByDate = await this.averagePostsByDate(date);
        break;
      case 'mostCommentedPost':
        statisticsObject.getPostTitleWithMostCommentsOnDate = await this.getPostTitleWithMostCommentsOnDate(date);
        break;
      case 'topThreeCommenters':
        statisticsObject.getTopThreeByDate = await this.getTopThreeByDate(date);
        break;
      case 'usersWithoutCommentsAndPosts':
        statisticsObject.getUserWithoutCommentsandPostsbyDate = await this.getUserWithoutCommentsandPostsbyDate(date);
        break;
      case 'postsWithoutCommentsPercentage':
        statisticsObject.percentageOfPostsWithoutCommentsByDate = await this.percentageOfPostsWithoutCommentsByDate(date);
        break;
      default:
        throw new Error(`Invalid stat type: ${statType}`);
    }
    return statisticsObject;
  }
  

  /* async getStatistics(date: string): Promise<{
    averageCommentsByDate: User;
    averagePostsByDate: User;
    getPostTitleWithMostCommentsOnDate: User;
    getTopThreeByDate: User;
    getUserWithoutCommentsandPostsbyDate: User;
    percentageOfPostsWithoutCommentsByDate: User;
  }> {
    const averageCommentsByDate = await this.averageCommentsByDate(date);
    const averagePostsByDate = await this.averagePostsByDate(date); // aguardar confirmação do PO em relação à média diária
    const getPostTitleWithMostCommentsOnDate = await this.getPostTitleWithMostCommentsOnDate(date);
    const getTopThreeByDate = await this.getTopThreeByDate(date); // string
    const getUserWithoutCommentsandPostsbyDate = await this.getUserWithoutCommentsandPostsbyDate(
      date,
    ); 
    const percentageOfPostsWithoutCommentsByDate = await this.percentageOfPostsWithoutCommentsByDate(date);

    return {
      averageCommentsByDate,
      averagePostsByDate,
      getPostTitleWithMostCommentsOnDate,
      getTopThreeByDate,
      getUserWithoutCommentsandPostsbyDate,
      percentageOfPostsWithoutCommentsByDate,
    };
  } */
}
