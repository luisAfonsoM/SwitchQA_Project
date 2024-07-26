import Users from '../endpoints/Users';
import { bootstrap } from '../../modules/forum/repos';

const users = new Users();
let data;
const statType = 'averageComments';

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();

  data = {
    username: 'PauloTeixeira',
    password: "'1222013.",
    accessToken: '',
  };
});
describe('US015- TEST AVERAGE comments per day with valid date', () => {
  it('test average comments per day', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.getStatisticsByDate('2023-06-26', statType, data.accessToken);

    expect(response.status).toEqual(200);
    expect(response.data.statistics.averageCommentsByDate[0].average_comments_per_post).toBe('5.0');
  });
});

describe('US015- TEST AVERAGE comments per day with invalid date', () => {
  it('test average comments per day with invalid date should return 500', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.getStatisticsByDate('2023-06-', statType, data.accessToken);

    expect(response.status).toBe(500);
    expect(response.data.message).toBe('An unexpected error occurred.');
  });
});
describe('US015- TEST AVERAGE comments per day with no posts available', () => {
  it('test average comments per day with no posts available', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.getStatisticsByDate('2023-06-20', statType, data.accessToken);

    expect(response.status).toEqual(200);
    expect(response.data.statistics.averageCommentsByDate[0].average_comments_per_post).toBe(null);
  });
});

describe('US015- TEST AVERAGE comments per day with no comments available', () => {
  it('test average comments per day with no comments available', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.getStatisticsByDate('2023-06-27', statType, data.accessToken);

    expect(response.status).toEqual(200);
    expect(response.data.statistics.averageCommentsByDate[0].average_comments_per_post).toBe(null);
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
