import Users from '../endpoints/Users';

const users = new Users();
let response;

describe('US001 - Visitor registers a new account based on (SSD1) AC', () => {
  beforeAll(async () => {
    const regBody = {
      email: 'ssdEmail@gmail.com',
      username: 'ssdUsername',
      password: 'ssdPassword',
    };
    response = await users.post(regBody);
  });

  test('should return 200', () => {
    expect(response.status).toBe(200);
  });
});
