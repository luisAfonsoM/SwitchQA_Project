// testar member é o mesmo que o logged in
//testar o status code
//testar numero de posts
//testar numero de comments

//testar o rank
//testar o numero de posts
//testar o numero de comments
import { bootstrap } from '../../modules/forum/repos';
import Users from '../endpoints/Users';

const users = new Users();
let data;

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();

  data = {
    username: 'PauloTeixeira',
    password: "'1222013.",
    accessToken: '',
  };
});
describe('US010- validar que os member details', () => {
  it('should have the same name as the logged in user', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.userDetails(data.username, data.accessToken);

    expect(response.status).toEqual(200);
    expect(response.data.user.userByUsername.username).toBe(data.username);
  });

  it('should have the amount of 1 Post', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.userDetails('PauloTeixeira', data.accessToken);

    expect(response.status).toEqual(200);
    expect(response.data.user.userByUsername.post_count).toBe(1);
  });

  it('should have the amount of 3 comments', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.userDetails(data.username, data.accessToken);

    expect(response.status).toEqual(200);
    expect(response.data.user.userByUsername.comment_count).toBe(6);
  });

  describe('US010- validar dados de um member não loggado', () => {
    it('should have the same name as the logged in user', async () => {
      const login = await users.postLogin(data.username, data.password);
      data.accessToken = login.data.accessToken;

      const response = await users.userDetails('LuísAfonso', data.accessToken);

      expect(response.status).toEqual(200);
      expect(response.data.user.userByUsername.username).toBe('LuísAfonso');
    });

    it('should have the amount of 1 Post', async () => {
      const login = await users.postLogin(data.username, data.password);
      data.accessToken = login.data.accessToken;

      const response = await users.userDetails('LuísAfonso', data.accessToken);

      expect(response.status).toEqual(200);
      expect(response.data.user.userByUsername.post_count).toBe(1);
    });

    it('should have the amount of 4 comments', async () => {
      const login = await users.postLogin(data.username, data.password);
      data.accessToken = login.data.accessToken;

      const response = await users.userDetails('LuísAfonso', data.accessToken);

      expect(response.status).toEqual(200);
      expect(response.data.user.userByUsername.comment_count).toBe(7);
    });
  });
});

describe('US010- valida dddForum ranking', () => {
  it('the top commenter name should be AmbrosioDoChoco', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.userDetails('PauloTeixeira', data.accessToken);

    expect(response.status).toEqual(200);
    expect(response.data.user.userWithMoreComments[0].username).toBe('RitaCastro');
  });

  it('the top commenter should have 6 comments', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.userDetails('PauloTeixeira', data.accessToken);

    expect(response.status).toEqual(200);
    expect(response.data.user.userWithMoreComments[0].rank_comment_count).toBe(8);
  });

  it('the top commenter should have 2 posts', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.userDetails('PauloTeixeira', data.accessToken);

    expect(response.status).toEqual(200);
    expect(response.data.user.userWithMoreComments[0].rank_post_count).toBe(1);
  });

  afterAll(async () => {
    await bootstrap.deleteDB();
  });
});
