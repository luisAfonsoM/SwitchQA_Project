import Users from '../endpoints/Users';
import { bootstrap } from '../../modules/forum/repos';
import Comments from '../endpoints/Comments';

const users = new Users();
let data;
const comments = new Comments();
const statType = 'averagePosts';

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();

  data = {
    username: 'NunoPinto',
    password: "'1222639.",
    accessToken: '',
  };
});
describe('1 - US016 - TEST AVERAGE Posts per day with valid date -  - AC6 and AC7', () => {
  it('test average comments per day', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.getStatisticsByDate('2023-11-11', statType, data.accessToken);
    console.log(response.data);

    expect(response.status).toBe(200);
    expect(response.data.statistics.averagePostsByDate[0].total_posts).toBe(7);
    expect(response.data.statistics.averagePostsByDate[0].total_members).toBe(2);
    expect(response.data.statistics.averagePostsByDate[0].average_posts_per_member).toBe('3.5');
  });
});

describe('2 - US016 - TEST AVERAGE Post per day with invalid date  - AC5/AC9', () => {
  it('test average post per day with invalid date should return 500', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.getStatisticsByDate('2023-06-', statType, data.accessToken);

    expect(response.status).toBe(500);
    expect(response.data.message).toBe('An unexpected error occurred.');
  });
});

describe('3 - US016- TEST AVERAGE Posts per day with no posts available - AC8', () => {
  it('test average comments per day with no posts available', async () => {
    const login = await users.postLogin(data.username, data.password);
    data.accessToken = login.data.accessToken;

    const response = await users.getStatisticsByDate('2023-01-17', statType, data.accessToken);

    expect(response.status).toBe(200);
    expect(response.data.statistics.averagePostsByDate[0].average_posts_per_member).toBe(null);
  });
});

afterAll(async () => {
  await bootstrap.deleteDB();
});
