import Users from '../endpoints/Users';

const users = new Users();
let response;
let accessToken: string;

describe('1 - US012 - Member correctly logs out (SSD1) - AC1, AC2, AC3', () => {
  beforeAll(async () => {
    const regBody = {
      email: 'logout_success@logout.com',
      username: 'LogoutSuccess',
      password: 'LogoutPassword',
    };

    await users.post(regBody);
    response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;
  });
  test('1.1 - Member logs out of his account successfully', async (): Promise<void> => {
    const logout = await users.postLogout(accessToken);

    expect(logout.status).toBe(200);
    expect(logout.data).toBe('OK');
  });
});
