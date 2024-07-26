# API Test Documentation

## **Test Name:**

[US009-ssd.api.test](/src/api_test/US009/US009-ssd.api.test.ts)

## Description
This API test documentation covers the testing of the "US009 - SSD Alternative 2 - Sort Posts by Popular and SSD Alternative 2 - Sort Posts by New" scenarios. The tests verify the functionality of sorting posts by popularity and displaying them in the correct order.

## Endpoints Used
- `POST /users` - Create a user
- `POST /users/login` - Login user
- `POST /posts` - Create a new post
- `GET /posts/popular` - Get popular posts
- `POST /posts/{slug}/upvote` - Upvote a post
- `GET /posts/recent` - Get new posts

## Test Setup
1. Import the `Users`, `Posts`, and `Comments` modules from their respective files.
2. Initialize the `users`, `posts`, and `comments` objects.
3. Declare variables for registering users, logging in, and storing accesstokens.
4. Declare variables for storing responses related to popular posts and new posts.
5. Declare variables for storing post slugs and view post responses.
6. Set registration body objects with email, username, and password for each member.
7. Register each member by sending a POST request to the `/users` endpoint with the registration body.
8. Log in each member by sending a POST request to the `/users/login` endpoint with the registered username and password.
9. Store the access token received from the login response.
10. Create new posts for each member by sending a POST request to the `/posts` endpoint with the post body and the corresponding accesstoken.
11. Get popular posts by sending a GET request to the `/posts/popular` endpoint.
12. Extract the slugs of the created posts using the `getSlug` method from the `Posts` module.
13. Perform additional test steps specific to each test scenario.

## Preconditions
- The API server is running and accessible.
- The test users with the provided email, username, and password do not exist in the database.
- The test posts do not exist in the database.

## Test Steps and Expected Results

### 1 - US009 - Sort Posts by Popular or New - Create/Test Environment
1. Register members and verify the registration status code is 200.
2. Login members and verify the login status code is 200.
3. Get popular posts and verify the status code is 200.
- [Test Link](../../../src/api_test/US009/US009-ssd.api.test.ts#L50)

### 2 - US009 - SSD Alternative 2 - Sort Posts by Popular
1. Upvote posts whith different members.
2. Check if posts are sorted by score after upvoting.
- [Test Link](../../../src/api_test/US009/US009-ssd.api.test.ts#L124)

### 3 - US009 - SSD Alternative 1 - Sort Posts by New
1. Get new posts and verify the status code is 200.
2. Check if posts are displayed/sorted by timestamp.
- [Test Link](../../../src/api_test/US009/US009-ssd.api.test.ts#L144)

## Test Execution
- Execute the test using Jest.
- Monitor the test execution for any failures or errors.
- Review the test results and investigate any failures.

Note: The `describe.skip` statements in the code indicate that the corresponding test scenarios are currently skipped.