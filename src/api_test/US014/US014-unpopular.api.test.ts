import Posts from '../endpoints/Posts';
import { bootstrap } from '../../modules/forum/repos';

const posts = new Posts();
let unpopularPostsResponse;

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});
describe('US014 - Sort posts by Unpopular', () => {
  beforeAll(async (): Promise<void> => {});

  it('Test 1 - Get unpopular posts API must return Status 200 OK', async (): Promise<void> => {
    unpopularPostsResponse = await posts.getUnpopularPosts();

    expect(unpopularPostsResponse.status).toBe(200);
  });

  it('Test 2 - Check if posts are sorted by lowest score', async (): Promise<void> => {
    /**
     *
     * this test will run based on previous database and inserted data with following sql script
     *
     * path: src\api_test\US014\InsertData_DB\US014-unpopular_insert_data.sql
     *
     */

    unpopularPostsResponse = await posts.getUnpopularPosts();
    const arrayPosts = unpopularPostsResponse.data.posts;

    // this is an ordered array with points of the less voted posts, based on inserted data with previous sql script
    const arrayExpectedPoints = [
      -200, -170, -160, -150, -140, -130, -120, -100, -90, 20, 45, 65, 70, 85, 90,
    ];

    // testing if position of less voted score is displayed by order between 15 posts
    for (let i = 0; i < arrayPosts.length; i++) {
      expect(arrayPosts[i].points).toBe(arrayExpectedPoints[i]);
    }

    expect(unpopularPostsResponse.status).toBe(200);
  });
});
afterAll(async () => {
  await bootstrap.deleteDB();
});
