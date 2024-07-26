import { userRepo } from '../../modules/users/repos';
import { bootstrap } from '../../modules/forum/repos';

beforeAll(async () => {
  await bootstrap.bootstrapDataToDb();
});


describe('API Tests for getUserWithoutCommentsandPostsbyDate', () => {
  test('Test 1 - At least one user should not post or comment', async () => {
    //arrange
    const date = '2023-06-29';
    const username1 = 'NatalyLucas';

    try {
      //act
      const result = await userRepo.getUserWithoutCommentsandPostsbyDate(date);

      // assert

      expect(result[1].username).toEqual(username1);
    } catch (error) {
      console.error('Erro no teste:', error);
      throw error;
    }
  });
});

describe('API Tests for getUserWithoutCommentsandPostsbyDate', () => {
  let allUsersDate;

  beforeAll(async () => {
    allUsersDate = '2023-11-09';
  });

  test('Get a date where all the users did at least one action', async () => {
    try {
      const result = await userRepo.getUserWithoutCommentsandPostsbyDate(allUsersDate);

      expect(result).toBeDefined();
      expect(result.length).toBeGreaterThan(0);
    } catch (error) {
      console.error('Erro no teste:', error);
      throw error;
    }
  });

  afterAll(() => {});
});

afterAll(async () => {
  await bootstrap.deleteDB();
});
