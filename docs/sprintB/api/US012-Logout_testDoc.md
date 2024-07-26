## API Test Documentation

### Description

This API test documentation covers the "US012 - Logout" scenarios which includes the following tests:

1. Successful Logout: Verifies that a member can successfully log out of their account.

2. Logout Unsuccess: Member already logged out tries to log out again.

3. Logout Unsuccess: Member logs out with an invalid/expired token. 

These tests validate the behavior of the logout functionality in these scenarios.

### Endpoints Used
- `POST /users` - Create a user
- `POST /users/login` - User login
- `POST /users/logout` - User logout

### Test Setup
- Import Users endpoint class.
- Initialize the users object.
- Declare variable accessToken.
- Set the registration body with the email, username, and password.
- Register a user by sending a POST request to the `/users` endpoint with the registration body.
- Perform a login by sending a POST request to the `/users/login` endpoint with the registered username and password.
- Store the access token from the login response.
- Perform a logout by sending a POST request to the `/users/logout` endpoint with the stored access token.

### Preconditions
- The API server is running and accessible.
- The test user with the provided email, username, and password does not exist in the database.
- The test user is logged in before performing the tests.

### Test Steps and Expected Results

#### SSD1 - Test 1 - Member logs out of his account successfully
1. Send a POST request to the `/users/logout` endpoint with the stored access token.
2. Verify that the response status code is 200 (OK).
3. Verify that the response data is "OK".

#### SSD1 - Test 2 - Logout Unsuccess: Member already logged out tries to log out again
1. Send a POST request to the `/users/logout` endpoint with the stored access token.
2. Verify that the response status code is 403 (Forbidden).
3. Verify that the response data is `{"message":"Auth token not found. User is probably not logged in. Please login again."}`.

#### SSD1 - Test 3 - Logout Unsuccess: Member logs out with an invalid/expired token
1. Send a POST request to the `/users/logout` endpoint with an invalid or expired access token.
2. Verify that the response status code is 403 (Forbidden).
3. Verify that the response data is `{"message":"Token signature expired."}`.

### Test Data
- Registration Body:
  - Email
  - Username
  - Password

### Test Execution:
- Execute the test using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and look into any failures.