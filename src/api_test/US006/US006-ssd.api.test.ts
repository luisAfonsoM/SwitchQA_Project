import Users from '../endpoints/Users';
import Comments from '../endpoints/Comments';

jest.setTimeout(10000);
const users = new Users();
const comments = new Comments();
let data;
let accessToken;
const postCommentBody = {
  comment: 'We toys can see everything.',
};
import { bootstrap } from '../../modules/forum/repos';

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});
describe('US 006 - Reply to a comment on a post', () => {
  beforeAll(async () => {
    data = {
      username: 'PauloTeixeira',
      password: "'1222013.",
      accessToken: '',
      comment: 'Im a commedntsdfsdfadfadfad',
      commentId: '65ed97ad-776e-4751-928b-706d1246d72a',
      postId: '1616161-Dream-TeSTer',
    };
  });

  it('should have return 200', async () => {
    const login = await users.postLogin(data.username, data.password);
    accessToken = login.data.accessToken;
    await comments.sleep(2000);

    const response = await comments.reply(data.commentId, data.postId, postCommentBody, accessToken);

    console.log(response.data);
    await comments.sleep(2000);

    expect(response.status).toBe(200);
  });

  it.skip('should have the same content', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;
    await comments.sleep(2000);

    const commentsResponse = await comments.getComments(data.postId);
    await comments.sleep(2000);

    expect(commentsResponse.data.comment.text).toBe(postCommentBody);
  });
  it.skip('should increase the num of comments', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    await comments.sleep(2000);
    const commentsResponse = await comments.getComments(data.postId);
    const numComments = commentsResponse.data.comments.length;

    await comments.sleep(2000);

    expect(commentsResponse.data.comments.length).toBe(numComments + 1);
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
