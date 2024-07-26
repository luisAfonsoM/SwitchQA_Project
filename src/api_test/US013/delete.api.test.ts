import Users from '../endpoints/Users';
import Posts from '../endpoints/Posts';
import Comments from '../endpoints/Comments';
import jwt from 'jsonwebtoken';
import { bootstrap } from '../../modules/forum/repos';

//Variables for first user
let users: Users;
let posts: Posts;
let response;
let accessToken;
let decoded;
let userId: string;
let regBody;
let slugPost;

//Variables for second user
let comment: Comments;
let responseTwo;
let decodedTwo;
let regBodyTwo;
let accessTokenTwo;
let userIdTwo: string;

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});
describe('Delete member - Unsuccess', (): void => {
  beforeAll(async (): Promise<void> => {
    // Register first user and obtain an access token && create a post
    users = new Users();
    const randomEmail = Users.getRandomEmail();
    const randomUsername = Users.getRandomUsername();
    regBody = {
      email: randomEmail,
      username: randomUsername,
      password: 'password',
    };
    console.log("regBody", regBody)

    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);
    expect(response.status).toBe(200);
    accessToken = response.data.accessToken;
    decoded = jwt.decode(accessToken);
    userId = decoded.userId;

    // Create a post
    posts = new Posts();
    const postBody = {
      title: 'Test Post Title',
      postType: 'text',
      text: 'Sample post content body',
      link: '',
    };
    const postResponse = await posts.createPost(postBody, accessToken);
    expect(postResponse.status).toBe(200);

    // Register second user and obtain an access token
    users = new Users();
    const randomEmailTwo = Users.getRandomEmail();
    const randomUsernameTwo = Users.getRandomUsername();
    regBodyTwo = {
      email: randomEmailTwo,
      username: randomUsernameTwo,
      password: 'password',
    };
    console.log("regBodyTwo", regBodyTwo)

    await users.post(regBodyTwo);
    responseTwo = await users.postLogin(regBodyTwo.username, regBodyTwo.password);
    expect(responseTwo.status).toBe(200);
    accessTokenTwo = response.data.accessToken;
    decodedTwo = jwt.decode(accessTokenTwo);
    userIdTwo = decodedTwo.userId;

    // Create a comment
    comment = new Comments();
    const postList = await posts.getNewPosts();
    slugPost = await posts.getSlug(postList, postBody, regBody);
    const postCommentBody = {
      comment: 'this is a comment sample',
    };
    response = await comment.createComment(slugPost, postCommentBody, accessTokenTwo);
    expect(response.status).toBe(200);
  });
  test('attempt to delete user who has created a post', async (): Promise<void> => {
    // Attempt to delete user
    console.log("check these", accessToken, userId)
    response = await users.delete(accessToken, userId);
    expect(response.status).toBe(500);
  });
  test('attempt to delete user who has commented on a post', async (): Promise<void> => {
    console.log("check these", accessTokenTwo, userIdTwo)
    response = await users.delete(accessTokenTwo, userIdTwo);
    expect(response.status).toBe(500);
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
