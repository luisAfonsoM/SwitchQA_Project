import Users from '../endpoints/Users';
import { bootstrap } from '../../modules/forum/repos';

const users = new Users();
let accessToken: string;


const regBody = {
  email: 'login_success@login.com',
  username: 'LoginSuccess',
  password: 'LoginPassword',
};
beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});

describe('1 - US011 - Member correctly logs in (SSD1) - AC2, AC3, AC4', (): void => {
  beforeAll(async (): Promise<void> => {
    await users.post(regBody);
  });

  test('1.1 - After register, member must login successfully', async (): Promise<void> => {
    //Register, login and get accessTocken/refreshToken
    const response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;
    

    expect(response.status).toBe(200);
    expect(accessToken).toBeDefined();
    expect(response.data.refreshToken).toBeDefined();
  });

  test('2 - Validates authenticated member info after login', async (): Promise<void> => {
    //Validates authenticated member info
    const response = await users.getMe(accessToken);

    expect(response.status).toBe(200);
    expect(response.data.user.username).toBe(regBody.username);
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
