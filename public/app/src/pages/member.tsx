import React from 'react';
import { Layout } from '../shared/layout';
import Header from '../shared/components/header/components/Header';
import { DeleteButton } from '../shared/components/button';
import { connect } from 'react-redux';
import { IUserOperators } from '../modules/users/redux/operators';
import { UsersState } from '../modules/users/redux/states';
import * as usersOperators from '../modules/users/redux/operators';
import { bindActionCreators } from 'redux';
import { AuthService } from '../modules/users/services/authService';
import { RouteComponentProps } from 'react-router-dom';
import { get } from 'lodash';
import withUserDeletionHandling from '../modules/users/hocs/withUserDeletionHandling';
import * as forumOperators from '../modules/forum/redux/operators';
import { ForumState } from '../modules/forum/redux/states';
import { usersService } from '../modules/users/services';
import BackNavigation from '../shared/components/header/components/BackNavigation';
import { Avatar } from '../shared/components/avatar';
import userAvatar from '../../src/avatar.svg'; // Avatar number one
import userAvatarTwo from '../../src/avatar_2.svg';// Avatar number two
import userAvatarThree from '../../src/avatar_3.svg';// Avatar number three
import userAvatarFour from '../../src/avatar_4.svg';// Avatar number four


interface MemberPageProps
  extends usersOperators.IUserOperators,
    forumOperators.IForumOperations {
  users: UsersState;
  forum: ForumState;
}

interface IReactRouterParams {
  username: string;
}

interface MatchParams {
  userId: string;
  username: string;
  usernameFromToken: string;
}

export class MemberPage extends React.Component<
  MemberPageProps & RouteComponentProps<IReactRouterParams>,
  any
> {
  constructor(
    props: MemberPageProps & RouteComponentProps<IReactRouterParams>
  ) {
    super(props);

    let userId = null;
    const authService = new AuthService();
    const accessToken = authService.getToken('access-token');
    if (accessToken) {
      const base64Url = accessToken.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const decoded = JSON.parse(window.atob(base64));
      userId = decoded.userId;
    }
    const savedIndex = localStorage.getItem('selectedAvatarIndex'); // Retrieves the value associated with the key 'selectedAvatarIndex' from the browser's local storage


    this.state = {
      userId,
      username: this.getUserName(),
      usernameFromToken: get(this.props, 'users.user.username', ''),
      userComments: null,
      userEmail: null,
      userPosts: null,
      userWithMoreComments: null,
      userWithMorePosts: null,
      rankOneUser: null,
      avatarList: [userAvatar, userAvatarTwo, userAvatarThree, userAvatarFour], // List of available avatars
      currentAvatarIndex: savedIndex !== null ? parseInt(savedIndex, 10) : 0, // Checks if there's a saved index for the avatar.
    };
  }

  handleAvatarClick = () => {
    const { currentAvatarIndex, avatarList } = this.state; // Gets the current Index and Avatar List:
    const nextIndex = (currentAvatarIndex + 1) % avatarList.length; // Calculates the index of the next avatar in the list
    this.setState({ currentAvatarIndex: nextIndex }, () => { // Updates the component's state with the new index 
    localStorage.setItem('selectedAvatarIndex', nextIndex.toString()); // Saves this new index in the browser's local storage
    });
  };
  
  getUserName() {
    return this.props.match.params.username;
  }
  getPostsCommentsByUserName() {
    return usersService.getPostsCommentsByUsername(this.getUserName());
  }

  getNumberOneUser() {
    return this.getPostsCommentsByUserName()
      .then((result: any) => {
        return result.userWithMoreComments[0].username;
      })
      .catch((error) => {
        console.error('Something went wrong:', error);
        return null;
      });
  }
  getUserWithMorePosts() {
    return this.getPostsCommentsByUserName()
      .then((result: any) => {
        return result.userWithMoreComments[0].rank_post_count;
      })
      .catch((error) => {
        console.error(' something went wrong:', error);
        return null;
      });
  }
  getUserWithMoreComments() {
    return this.getPostsCommentsByUserName()
      .then((result: any) => {
        return result.userWithMoreComments[0].rank_comment_count;
      })
      .catch((error) => {
        console.error(' something went wrong:', error);
        return null;
      });
  }

  getUserPosts() {
    return this.getPostsCommentsByUserName()
      .then((result: any) => {
        return result.userByUsername.post_count;
      })
      .catch((error) => {
        console.error(' something went wrong:', error);
        return null;
      });
  }
  getUserEmail() {
    return this.getPostsCommentsByUserName()
      .then((result: any) => {
        return result.userByUsername.user_email;
      })
      .catch((error) => {
        console.error(' something went wrong:', error);
        return null;
      });
  }
  getUserComments() {
    return this.getPostsCommentsByUserName()
      .then((result: any) => {
        return result.userByUsername.comment_count;
      })
      .catch((error) => {
        console.error(' something went wrong:', error);
        return null;
      });
  }
  async componentDidMount() {
    const numberOneUser = await this.getNumberOneUser();
    if (numberOneUser) {
      this.setState({ rankOneUser: numberOneUser });
    }
    const postsNumber = await this.getUserPosts();
    if (postsNumber) {
      this.setState({ userPosts: postsNumber });
    }
    const emailUser = await this.getUserEmail();
    if (emailUser) {
      this.setState({ userEmail: emailUser });
    }
    const commentsNumber = await this.getUserComments();
    if (commentsNumber) {
      this.setState({ userComments: commentsNumber });
    }
    const userMostComments = await this.getUserWithMoreComments();
    if (userMostComments) {
      this.setState({ userWithMoreComments: userMostComments });
    }
    const userMostPosts = await this.getUserWithMorePosts();
    if (userMostPosts) {
      this.setState({ userWithMorePosts: userMostPosts });
    }
  }
  handleDeleteUser = async () => {
    const { userId } = this.state;
    if (!userId) {
      console.error('User ID not found');
      return;
    }
    console.log('Deleting user with ID: ', userId);
    await this.props.deleteUser(userId);
  };

  render() {
    const { username, email } = this.state;
    const { userPosts } = this.state;
    const { userEmail } = this.state;
    const { userComments } = this.state;
    const { userWithMoreComments } = this.state;
    const { userWithMorePosts } = this.state;
    const { rankOneUser } = this.state;
    const { avatarList, currentAvatarIndex } = this.state;
    const selectedAvatar = avatarList[currentAvatarIndex];

    return (
      <Layout>
        <BackNavigation text="Back to all discussions" to="/" />
        <div className="header-container flex flex-row flex-center flex-even"></div>
        <div className="header-container flex flex-row flex-center flex-even">
          <Header
            title="Domain-Driven Designers"
            subtitle="Where awesome Domain-Driven Designers are made"
          />
        </div>
        <div className="member-profile">
          <div
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div onClick={this.handleAvatarClick}>
            <Avatar image={selectedAvatar} onClick={this.handleAvatarClick} />
            </div>
          <div>
            <h1>Member Profile </h1>
          </div>
          </div>
          <div>
            <DeleteButton
              onClick={this.handleDeleteUser}
              text={'Delete'}
            ></DeleteButton>
          </div>
          <h2 id={`user_${username}`} data-username={`${username}`}>
            {username}
          </h2>
          <p>
            <h4>User data & statistics</h4>
          </p>
          <p>
            Email:
            <span id={`user_${email}`} data-email={`${email}`}>
              {userEmail}
            </span>
          </p>

          <p>
            Posts: <span id="user-posts">{userPosts}</span>
          </p>
          <p>
            Number of Comments: <span id="user-comments">{userComments}</span>
          </p>
        </div>
        <div className="member-profile">
          <h1>
            RANK1# COMMENTER: <span id="rank-one-user">{rankOneUser}</span>
          </h1>
          <p>
            Number of comments:{' '}
            <span id="user-more-comments">{userWithMoreComments}</span>
          </p>
          <p>
            Number of Posts:{' '}
            <span id="user-more-posts">{userWithMorePosts}</span>
          </p>
        </div>
      </Layout>
    );
  }
}


function mapStateToProps({ users }: { users: UsersState }) {
  if ('userId' in users.user) {
    return {
      userId: users.user.userId,
      users
    };
  }
  return { users };
}

function mapActionCreatorsToProps(dispatch: any) {
  return bindActionCreators(
    {
      ...usersOperators
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(withUserDeletionHandling(MemberPage));