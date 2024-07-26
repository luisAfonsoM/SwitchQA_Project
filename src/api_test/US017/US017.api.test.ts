import Users from '../endpoints/Users';
import { bootstrap } from '../../modules/forum/repos';

let users: Users;
let accessToken;
let regBody;
const statType = 'mostCommentedPost';
beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});

describe('US017 - Get Post with more comments on a spefic date', (): void => {
  beforeAll(async (): Promise<void> => {
    users = new Users();
    regBody = {
      username: 'RicardoCerqueir',
      password: "'1222642.",
    };
    const response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;
  });

  test('1.1- checkin endPoint Status positive cenario should be 200', async (): Promise<void> => {
    const date: string = '2023-06-26';
    const response = await users.getStatisticsByDate(date, statType, accessToken);

    await expect(response.status).toBe(200);
  });
  test('1.2 - when the date is 2023-06-26 the result must be Dream TeSTer', async (): Promise<void> => {
    const date: string = '2023-06-26';
    const expectedResult = 'Dream TeSTer';

    const statistics = await users.getStatisticsByDate(date, statType, accessToken);

    const actualResult = statistics.data.statistics.getPostTitleWithMostCommentsOnDate.title;

    await expect(actualResult).toBe(expectedResult);
  });

  test('1.3 - when the date is 2023-06-27 the result must be null', async (): Promise<void> => {
    const date: string = '2023-06-27';
    const expectedResult = null;

    const statistics = await users.getStatisticsByDate(date, statType, accessToken);

    const actualResult = statistics.data.statistics.getPostTitleWithMostCommentsOnDate.title;

    await expect(actualResult).toBe(expectedResult);
  });

  test('1.4 - when the date is 1231 the result should be a status code 500', async (): Promise<void> => {
    const date: string = '1231';

    const statistics = await users.getStatisticsByDate(date, statType, accessToken);
    expect(statistics.status).toBe(500);
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
