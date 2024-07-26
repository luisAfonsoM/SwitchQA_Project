import Users from '../endpoints/Users';

const users = new Users();
let responsePost;
let accessToken1: string;


const regBody = {
  email: 'logout_unsuccess@logout.com',
  username: 'LogoutUnsuccess',
  password: 'LogoutPassword',
};

describe('1 - US012 - Logout Unsuccess', () => {
  beforeAll(async () => {
    await users.post(regBody);
    responsePost = await users.postLogin(regBody.username, regBody.password);
    accessToken1 = responsePost.data.accessToken;

    await users.postLogout(accessToken1);
  });
  test('1.1 - Member already logged out tryes to log out again with same accesstToken', async (): Promise<void> => {
    const logout = await users.postLogout(accessToken1);

    expect(logout.status).toBe(403);
    expect(logout.data).toStrictEqual({
      message: 'Auth token not found. User is probably not logged in. Please login again.',
    });
  });
});

describe('2 - US012 - Logout Unsuccess  ', () => {
  beforeAll(async () => {
    responsePost = await users.postLogin(regBody.username, regBody.password);
  });

  test('2.1 - Member loggs out with invalid token', async (): Promise<void> => {
    const logout = await users.postLogout('invalidAccessTokenOrWrongAccsessToken');

    expect(logout.status).toBe(403);
    expect(logout.data).toStrictEqual({ message: 'Token signature expired.' });
  });

  test('2.2 - The system allows members to logout and then login again even with an expired accessToken1.', async (): Promise<void> => {
    //Try to logout with accessToken1 Already expired.
    //Test failed. AccessToken do not expire immediately after logout.
    const logout = await users.postLogout(accessToken1);
    expect(logout.status).toBe(200);
    expect(logout.data).toBe('OK');
  });
});
