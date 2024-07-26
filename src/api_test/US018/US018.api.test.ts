import { userRepo } from "../../modules/users/repos"; 
import Users from '../endpoints/Users';
import { bootstrap } from '../../modules/forum/repos';

let users: Users;
let accessToken;
let regBody;
const statType = "topThreeCommenters";

describe('API Tests for getTopThreeByDate - Retrieval of the top three commenting members by date', () => {
  beforeAll(async (): Promise<void> => {
    await bootstrap.bootstrapDataToDb();
    users = new Users();
    regBody = {
      username: "RitaCastro",
      password: "'1222643.",
    };
    const response = await users.postLogin(regBody.username, regBody.password);
    accessToken = response.data.accessToken;
  });

  test('Check if endpoint request is successfull', async (): Promise<void> => {
    const date: string = "2023-11-15"
    const response = await users.getStatisticsByDate(date, statType, accessToken)
    await expect(response.status).toBe(200);
  });

  test('Return the top three commenters on a specific date', async () => {
    // Arrange
    const date = '2023-11-13';
    // Act
    const result = await userRepo.getStatistics(date, statType);
    // Assert
    const expectedResult = {
      getTopThreeByDate: {
        "usernameOne": "RitaCastro",
        "usernameTwo": "NatalyLucas",
        "usernameThree": "PauloTeixeira",
      }//,
    };
    expect(result.getTopThreeByDate).toEqual(expectedResult.getTopThreeByDate);
  });

  test('Return top three commenters in alphabetical order for a tie', async () => {
    //Note: they all have the same number of comments
    // Arrange 
    const date = '2023-11-15';
    // Act
    const result = await userRepo.getStatistics(date, statType);
    // Assert
    const expectedResult = {
      getTopThreeByDate: {
        "usernameOne": "LuísAfonso",
        "usernameTwo": "NatalyLucas",
        "usernameThree": "PauloTeixeira",
      }//,
    };
    expect(result.getTopThreeByDate).toEqual(expectedResult.getTopThreeByDate);
  });

  test('Return the last two commenters alphabetically in case of a tie', async () => {
    //Note: Luís was tied with Paulo
    // Arrange 
    const date = '2023-11-16';
    // Act
    const result = await userRepo.getStatistics(date, statType);
    // Assert
    const expectedResult = {
      getTopThreeByDate: {
        "usernameOne": "RitaCastro",
        "usernameTwo": "NatalyLucas",
        "usernameThree": "LuísAfonso",
      }//,
    };
    expect(result.getTopThreeByDate).toEqual(expectedResult.getTopThreeByDate);
  });

  test('Return the first two commenters alphabetically in case of a tie.', async () => {
    //Nataly was tied with Rita(2) and Paulo was tied with Luís (1)
    // Arrange 
    const date = '2023-11-17';
    // Act
    const result = await userRepo.getStatistics(date, statType);
    // Assert
    const expectedResult = {
      getTopThreeByDate: {
        "usernameOne": "NatalyLucas",
        "usernameTwo": "RitaCastro",
        "usernameThree": "LuísAfonso",
      }//,
    };
    expect(result.getTopThreeByDate).toEqual(expectedResult.getTopThreeByDate);
  });

  test('Should return null result if no data is found', async () => {
    // Arrange
    const date = '2023-11-12';
    // Act
    const result = await userRepo.getStatistics(date, statType);
    // Assert
    const expectedResult = {
      getTopThreeByDate: {
        "usernameOne": null,
        "usernameThree": null,
        "usernameTwo": null
      }//,
    };
    expect(result.getTopThreeByDate).toEqual(expectedResult.getTopThreeByDate);
  });

  test('Should handle an invalid date format', async () => {
    const invalidDates = ['222', '2023-NOV-13', '11-11-2023'];
    // Iterate through each invalid date
    for (const invalidDate of invalidDates) {
      let result;
      try {
        result = await userRepo.getStatistics(invalidDate, statType);
      } catch (error) {
        // Assert
        expect(error).toBeTruthy();    // Ensures that an error object is present
      }
      if (result instanceof Error) {
        expect(result).toBeNull();     // Checks that if an error is caught, result should be null
      }
      const statistics = await users.getStatisticsByDate(invalidDate, statType, accessToken)
      expect(statistics.status).toBe(500);
    }
  });
})
afterAll(async () => {
  await bootstrap.deleteDB();
});





