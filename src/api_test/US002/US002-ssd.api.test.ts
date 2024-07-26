import Users from '../endpoints/Users';
import Posts from '../endpoints/Posts';
import Comments from '../endpoints/Comments';
let posts: Posts;
let users: Users;
let accessToken: string;
let response;
const comments = new Comments();

jest.setTimeout(20000);
import { bootstrap } from '../../modules/forum/repos';

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});
describe('US002 - Member correctly makes a post (SSD1) according to the AC1, AC3, AC8', (): void => {
  beforeAll(async (): Promise<void> => {
    posts = new Posts();
    users = new Users();

    const regBody = {
      email: 'ole1@goge.pt',
      username: 'jone1',
      password: 'toze12341',
    };

    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);
    await comments.sleep(1000);
    accessToken = response.data.accessToken;
  });

  it('Post1 - Create Post with text', async (): Promise<void> => {
    const postBody = {
      title: 'A new post has arrived',
      postType: 'text',
      text: 'we must take the ring to mount doom',
      link: '',
    };

    response = await posts.createPost(postBody, accessToken);
    await comments.sleep(2000);
    expect(response.status).toBe(200);
    expect(response.data).toBe('OK');
  });
});

describe('US002 - Member correctly makes a post with an embedded link (SSD2) according to the AC1, AC3 and AC9', (): void => {
  it('Post2 - Create Post with link', async (): Promise<void> => {
    const postBody = {
      title: 'a new power rises',
      postType: 'link',
      text: '',
      link: 'gondor.pt',
    };

    response = await posts.createPost(postBody, accessToken);
    await comments.sleep(2000);
    expect(response.status).toBe(200);
    expect(response.data).toBe('OK');
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
