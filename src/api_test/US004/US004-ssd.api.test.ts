import Users from '../endpoints/Users';
import Comments from '../endpoints/Comments';
let users: Users;
let comments: Comments;
let accessToken: string;
let response;
const slugPost: string = '4444444-Cucumber';

import { bootstrap } from '../../modules/forum/repos';

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});
describe('US004 - Member correctly makes a comment on a post (SSD1), according to the AC1, AC2, AC3 and AC4', (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    comments = new Comments();

    const login = {
      username: 'RicardoCerqueir',
      password: "'1222642.",
    };

    const loginData = await users.postLogin(login.username, login.password);
    await comments.sleep(1000);
    accessToken = loginData.data.accessToken;
  });

  it('Create a comment', async (): Promise<void> => {
    const postCommentBody = {
      comment: 'mandou-me uma carta pra me avisar',
    };
    response = await comments.createComment(slugPost, postCommentBody, accessToken);
    await comments.sleep(1000);
    expect(response.status).toBe(200);
    expect(response.data).toBe('OK');
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
