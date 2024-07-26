import Users from '../endpoints/Users';
import Posts from '../endpoints/Posts';
import Comments from '../endpoints/Comments';

const posts = new Posts();
const users = new Users();
const comments = new Comments();
let accessToken: string;
let response;
let slugPost;
let postCommentBody;
let regBody;
jest.setTimeout(20000);

import { bootstrap } from '../../modules/forum/repos';

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});
describe('US005 - visitor (SSD1) views comments and their data according to AC1', (): void => {
  beforeAll(async (): Promise<void> => {
    regBody = {
      email: 'frodobaggins@gmail.com',
      username: 'ringmaster',
      password: 'unrealdragon',
    };

    await users.post(regBody);
    const createUser = await users.postLogin(regBody.username, regBody.password);

    accessToken = createUser.data.accessToken;

    const postBody = {
      title: 'the hour comes late',
      postType: 'text',
      text: 'the ring cannot stay here gandalf',
      link: '',
    };

    await posts.createPost(postBody, accessToken);
    const orderPostsByNew = await posts.getNewPosts();
    await comments.sleep(1000);
    slugPost = await posts.getSlug(orderPostsByNew, postBody, regBody);
    await comments.sleep(1000);
    postCommentBody = {
      comment: 'we cannot take the ring to isengard!',
    };
    await comments.createComment(slugPost, postCommentBody, accessToken);
    await comments.sleep(1000);
  });
  test('US005 - SSD1 View comments and their data by seleting the post', async (): Promise<void> => {
    response = await comments.getComments(slugPost);
    await comments.sleep(1000);
    expect(response.status).toBe(200);
  });
});

describe("S005 - visitor (SSD2) views a comment and it's data according to AC1", (): void => {
  test('US005 - SSD2 View comments and their data by seleting the comment timestamp', async (): Promise<void> => {
    const commentList = await comments.getComments(slugPost);
    await comments.sleep(1000);
    const commentInfo = await comments.getCommentData(commentList, postCommentBody.comment, regBody);
    await comments.sleep(1000);
    response = await comments.getComment(commentInfo.commentId);
    await comments.sleep(1000);
    expect(response.status).toBe(200);
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
