import Users from '../endpoints/Users';
import Posts from '../endpoints/Posts';
import Comments from '../endpoints/Comments';

//Variables for the user
let users: Users;
let posts: Posts;
const comments = new Comments();
let response;
let accessToken;
let regBody;
let slugPost;
const date = new Date().toISOString().split('T')[0];
const postCommentBody = {
  comment: 'We toys can see everything.',
};
const statType = "postsWithoutCommentsPercentage";
//jest.setTimeout(30000);

import { bootstrap } from '../../modules/forum/repos';

beforeAll(async () => {
  await bootstrap.deleteDB();
});

describe('Testing Percentage of Posts Without', (): void => {
  beforeAll(async (): Promise<void> => {
    // Register user and login
    users = new Users();
    posts = new Posts();
    const randomEmail = Users.getRandomEmail();
    const randomUsername = Users.getRandomUsername();
    regBody = {
      email: randomEmail,
      username: randomUsername,
      password: 'password',
    };
    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);
    expect(response.status).toBe(200);
    accessToken = response.data.accessToken;

    // Create two posts
    const postBody = {
      title: 'Test Post Title',
      postType: 'text',
      text: 'Sample post content body',
      link: '',
    };
    response = await posts.createPost(postBody, accessToken);
    await comments.sleep(1000);
    expect(response.status).toBe(200);
    const postBody2 = {
      title: 'Test Post Title',
      postType: 'text',
      text: 'Sample post content body',
      link: '',
    };
    response = await posts.createPost(postBody2, accessToken);
    await comments.sleep(1000);
    expect(response.status).toBe(200);
    response = await posts.getNewPosts();
    await comments.sleep(1000);
    slugPost = posts.getSlug(response, postBody2, regBody);

    //Comment one of the posts
    await comments.sleep(1000);
    response = await comments.createComment(slugPost, postCommentBody, accessToken);
    expect(response.status).toBe(200);
  });
  test('return 50 given 2 posts and one having no comments', async (): Promise<void> => {
    const response = await users.getStatisticsByDate(date, statType, accessToken);
    expect(response.status).toBe(200);
    console.log("statistics here", response.data)
    const expectedResult = '50';
    const actualResult = response.data.statistics.percentageOfPostsWithoutCommentsByDate.percentage_without_comments; //correct object
    console.log('actualResult: ' + actualResult);
    await expect(actualResult).toBe(expectedResult);
  });
  test('return error 500 given wrong date"', async (): Promise<void> => {
    const date: string = '1231';
    const response = await users.getStatisticsByDate(date, statType, accessToken);
    expect(response.status).toBe(500);
  });
  test('return null given date with no posts', async (): Promise<void> => {
    const date: string = '1999-06-27';
    const expectedResult = null;
    const response = await users.getStatisticsByDate(date, statType, accessToken);
    const actualResult = response.data.statistics.percentageOfPostsWithoutCommentsByDate.percentage_without_comments; //correct object
    await expect(actualResult).toBe(expectedResult);
  });
});

afterAll(async () => {
  await bootstrap.deleteDB();
});