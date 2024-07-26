## API Test Documentation

### Description

This documentation covers two testing scenarios for the login functionality: 

1. Successful Login and Validation: Verifies that a registered member can successfully log in, obtain access and refresh tokens, and validate their authenticated information based on the acceptance criteria defined in US011.

2. Unsuccessful Login Cases: Verifies the behavior of the login endpoint when incorrect or blank username/password combinations are provided. The tests check for expected error messages and HTTP status codes returned by the API.

### Endpoints Used
- `POST /users` - Create a user
- `POST /users/login` - User login
- `GET /users/me` - Retrieve authenticated member information

### Test Setup
- Import Users endpoint class.
- Initialize the users object.
- Declare variables: accessToken and refreshToken.
- Set the registration body with the email, username, and password.
- Register a user by sending a POST request to the `/users` endpoint with the registration body.

### Preconditions
- The API server is running and accessible.
- The test user with the provided email, username, and password does not exist in the database.

### Test Steps and Expected Results

#### SSD1 - Test 1 - After register, member must login successfully
1. Send a POST request to the `/users/login` endpoint with the registered username and password.
2. Store the response's access token and refresh token.
3. Verify that the response status code is 200 (OK).
4. Verify that the response data's access token is defined.
5. Verify that the response data's refresh token is defined.

#### SSD1 - Test 2 - Validates authenticated member info after login
1. Send a GET request to the `/users/me` endpoint with the stored access token.
2. Verify that the response status code is 200 (OK).
3. Verify that the response data's user username matches the registered username.

#### SSD1 - Test 3 - Login with incorrect username
1. Set the login request body with an incorrect username and the correct password.
2. Send a POST request to the `/users/login` endpoint with the login request body.
3. Verify that the response status code is 500 (Internal Server Error).
4. Verify that the response data is `{"message": "An unexpected error occurred."}`.

#### SSD1 - Test 4 - Login with incorrect password
1. Set the login request body with the correct username and an incorrect password.
2. Send a POST request to the `/users/login` endpoint with the login request body.
3. Verify that the response status code is 400 (Bad Request).
4. Verify that the response data is `{"message": "Password doesnt match error."}`.

#### SSD1 - Test 5 - Login with incorrect username and password
1. Set the login request body with incorrect username and password.
2. Send a POST request to the `/users/login` endpoint with the login request body.
3. Verify that the response status code is 500 (Internal Server Error).
4. Verify that the response data is `{"message": "An unexpected error occurred."}`.

#### SSD1 - Test 6 - Login with correct username and blank password
1. Set the login request body with the correct username and a blank password.
2. Send a POST request to the `/users/login` endpoint with the login request body.
3. Verify that the response status code is 500 (Internal Server Error).
4. Verify that the response data is `{"message": "TypeError: Cannot read property 'toString' of undefined"}`.

#### SSD1 - Test 7 - Login with blank username and correct password
1. Set the login request body with a blank username and the correct password.
2. Send a POST request to the `/users/login` endpoint with the login request body.
3. Verify that the response status code is 500 (Internal Server Error).
4. Verify that the response data is `{"message": "TypeError: Cannot read property 'toString' of undefined"}`.

### Test Data
- Registration Body:
  - Email
  - Username
  - Password

### Test Execution:
- Execute the test using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and look into any failures.