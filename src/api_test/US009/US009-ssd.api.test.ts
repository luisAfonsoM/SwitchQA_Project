import Users from '../endpoints/Users';
import Posts from '../endpoints/Posts';
import Comments from '../endpoints/Comments';
import { bootstrap } from '../../modules/forum/repos';

const users = new Users();
const posts = new Posts();
const comments = new Comments();
let register1;
let register2;
let register3;
let login1;
let login2;
let login3;
let accessToken1: string;
let accessToken2: string;
let accessToken3: string;
let popularPostResponse1;
let popularPostResponse2;
let popularPostResponse3;
let newPostsResponse;
let unpopularPostsResponse;

jest.setTimeout(20000);
const slugPost1 = {
  slug: '',
};
const slugPost2 = {
  slug: '',
};
const slugPost3 = {
  slug: '',
};

const regBody1 = {
  email: 'sortpopularposts1@teste.com',
  username: 'SortPopular1',
  password: 'password',
};

const regBody2 = {
  email: 'sortpopularposts2@teste.com',
  username: 'SortPopular2',
  password: 'password',
};

const regBody3 = {
  email: 'sortpopularposts3@teste.com',
  username: 'SortPopular3',
  password: 'password',
};

describe('1 - US009 - Sort Posts by Popular or New - Create/Test Environment', () => {
  beforeAll(async () => {
    //Member 1 - Register, login and get accessToken1;
    register1 = await users.post(regBody1);
    login1 = await users.postLogin(regBody1.username, regBody1.password);
    accessToken1 = login1.data.accessToken;

    //Member 2 - Register, login and get accessToken2;
    register2 = await users.post(regBody2);
    login2 = await users.postLogin(regBody2.username, regBody2.password);
    accessToken2 = login2.data.accessToken;

    //Member 3 - Register, login and get accessToken3;
    register3 = await users.post(regBody3);
    login3 = await users.postLogin(regBody3.username, regBody3.password);
    accessToken3 = login3.data.accessToken;

    //Member 1 - Creates a Post and get slugPost1;
    const postBody1 = {
      title: 'First new post to sort by popular',
      postType: 'text',
      text: 'To sort by popular we need do create some posts.',
      link: '',
    };

    await posts.createPost(postBody1, accessToken1);
    popularPostResponse1 = await posts.getPopularPosts();
    slugPost1.slug = posts.getSlug(popularPostResponse1, postBody1, regBody1);
    await comments.sleep(2000);
    //Member 1 - Creates a Post and get slugPost2;
    const postBody2 = {
      title: 'Second new post to sort by popular',
      postType: 'text',
      text: 'To sort by popular we need do create some posts.',
      link: '',
    };

    await posts.createPost(postBody2, accessToken1);
    popularPostResponse2 = await posts.getPopularPosts();
    slugPost2.slug = posts.getSlug(popularPostResponse2, postBody2, regBody1);
    await comments.sleep(2000);

    //Member 1 - Creates a Post and get slugPost3;
    const postBody3 = {
      title: 'Third new post to sort by popular',
      postType: 'text',
      text: 'To sort by popular we need do create some posts.',
      link: '',
    };

    await posts.createPost(postBody3, accessToken1);
    popularPostResponse3 = await posts.getPopularPosts();
    slugPost3.slug = posts.getSlug(popularPostResponse3, postBody3, regBody1);
    await comments.sleep(2000);
  });

  test('1.1 - Register members should return 200 ', () => {
    expect(register1.status).toBe(200);
    expect(register2.status).toBe(200);
    expect(register3.status).toBe(200);
  });

  test('1.2 - Login members should return 200 ', () => {
    expect(login1.status).toBe(200);
    expect(login2.status).toBe(200);
    expect(login3.status).toBe(200);
  });

  test('1.3 - Get popular posts 1, 2 and 3 should return 200 ', () => {
    expect(popularPostResponse1.status).toBe(200);
    expect(popularPostResponse2.status).toBe(200);
    expect(popularPostResponse3.status).toBe(200);
  });

  describe.skip('2 - US009 - SSD Alternative 2 - Sort Posts by Popular', () => {
    test.skip('2.1 - Check if posts are sorted by score after upvoting', async () => {
      //Member 2 and 3 Upvote Post 1 | Member 3 upvote Post
      await posts.upVotePost(accessToken2, slugPost1);
      await comments.sleep(1000);
      await posts.upVotePost(accessToken3, slugPost1);
      await comments.sleep(1000);
      await posts.upVotePost(accessToken3, slugPost2);
      await comments.sleep(1000);
      const afterVotePost1 = await posts.getPopularPosts();

      //Check the position within the Popular Posts array, according to the assigned score.
      expect(afterVotePost1.data.posts[0].slug).toBe(slugPost1.slug);
      expect(afterVotePost1.data.posts[1].slug).toBe(slugPost2.slug);
      expect(afterVotePost1.data.posts[2].slug).toBe(slugPost3.slug);
    });
  });

  describe('3 - US009 - SSD Alternative 1 - Sort Posts by New', () => {
    beforeAll(async () => {
      newPostsResponse = await posts.getNewPosts();
    });

    test('3.1 - Get New posts should return 200', () => {
      expect(newPostsResponse.status).toBe(200);
    });

    test.skip('3.2 - Check if Posts are displayed/sorted by TimeStamp', () => {
      //to run this test clear data base and run the suit
      expect(newPostsResponse.data.posts[0].slug).toBe(slugPost3.slug);
      expect(newPostsResponse.data.posts[1].slug).toBe(slugPost2.slug);
      expect(newPostsResponse.data.posts[2].slug).toBe(slugPost1.slug);
    });
  });

  describe('4 - US009 - SSD Alternative 3 - Sort Posts by Unpopular', () => {
    beforeAll(async () => {
      unpopularPostsResponse = await posts.getUnpopularPosts();
    });

    test('4.1 - Get Unpopular posts should return 200', () => {
      expect(unpopularPostsResponse.status).toBe(200);
    });

    test.skip('4.2 - Check if Posts are displayed/sorted by Unpopular', () => {
      //to run this test clear data base and run the suit
      expect(unpopularPostsResponse.data.posts[0].slug).toBe(slugPost3.slug);
      expect(unpopularPostsResponse.data.posts[1].slug).toBe(slugPost2.slug);
      expect(unpopularPostsResponse.data.posts[2].slug).toBe(slugPost1.slug);
    });
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
