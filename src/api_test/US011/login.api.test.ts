import Users from '../endpoints/Users';
import { bootstrap } from '../../modules/forum/repos';

const users = new Users();
beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});

//Unsuccess case tests, accordingly whith respective test readme file documentation.
describe('1 - US011 - Login - Unsuccess Cases', (): void => {
  beforeAll(async (): Promise<void> => {
    const regBody = {
      email: 'login_unsuccess@login.com',
      username: 'LoginUnsuccess',
      password: 'LoginPassword',
    };

    await users.post(regBody);
  });

  test('1.1 - Login with incorrect username', async (): Promise<void> => {
    const regBody = {
      username: 'WrongUsername',
      password: 'LoginPassword',
    };

    const response = await users.postLogin(regBody.username, regBody.password);

    expect(response.status).toBe(500);
    expect(response.data).toStrictEqual({ message: 'An unexpected error occurred.' });
  });

  test('1.2 - Login with incorrect password', async (): Promise<void> => {
    const regBody = {
      username: 'LoginUnsuccess',
      password: 'WrongPassword',
    };

    const response = await users.postLogin(regBody.username, regBody.password);

    expect(response.status).toBe(400);
    expect(response.data).toStrictEqual({ message: 'Password doesnt match error.' });
  });

  test('1.3 - Login with incorrect username and password', async (): Promise<void> => {
    const regBody = {
      username: 'WrongUsername',
      password: 'WrongPassword',
    };

    const response = await users.postLogin(regBody.username, regBody.password);

    expect(response.status).toBe(500);
    expect(response.data).toStrictEqual({ message: 'An unexpected error occurred.' });
  });

  test('1.4 - Login with correct username and blank password', async (): Promise<void> => {
    const regBody = {
      username: 'LoginUnsuccess',
      password: '',
    };

    const response = await users.postLogin(regBody.username, regBody.password);

    expect(response.status).toBe(500);
    expect(response.data).toStrictEqual({
      message: "TypeError: Cannot read properties of undefined (reading 'toString')",
    });
  });

  test('1.5 - Login with blank username and correct password', async (): Promise<void> => {
    const regBody = {
      username: '',
      password: 'LoginPassword',
    };

    const response = await users.postLogin(regBody.username, regBody.password);

    expect(response.status).toBe(500);
    expect(response.data).toStrictEqual({
      message: "TypeError: Cannot read properties of undefined (reading 'toString')",
    });
  });

  test('2 - Try to login more than once whith the same uername and password', async (): Promise<void> => {
    //Backend allows to login more than once. Should return an error msg "User already logged in".

    const regBody = {
      username: 'LoginUnsuccess',
      password: 'LoginPassword',
    };

    const response1 = await users.postLogin(regBody.username, regBody.password);

    expect(response1.status).toBe(200);
  });

  test('2.1 - Try to login more than once whith the same uername and password', async (): Promise<void> => {
    const regBody = {
      username: 'LoginUnsuccess',
      password: 'LoginPassword',
    };

    const response2 = await users.postLogin(regBody.username, regBody.password);

    expect(response2.status).toBe(200);
  });

  test('2.2 - Try to login more than once whith the same uername and password', async (): Promise<void> => {
    const regBody = {
      username: 'LoginUnsuccess',
      password: 'LoginPassword',
    };

    const response3 = await users.postLogin(regBody.username, regBody.password);

    expect(response3.status).toBe(200);
  });
});

afterAll(async () => {
  await bootstrap.deleteDB();
});
