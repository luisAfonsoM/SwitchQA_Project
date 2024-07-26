**API Test Documentation**

**Test Name:** 
[US002-ssd.api.test.ts](/src\api_test\US002\US002-ssd.api.test.ts)

**Description:** 
- These tests validate the fields required for post creation according to the acceptance criteria defined in US002.

**Endpoints Used:**
- `POST /users` - Create a user
- `POST /users/login` - User login
- `POST /posts` - Create a post
- `GET /posts`- Retrieve posts

**Test Setup:**
- Import the necessary endpoint classes: Users and Posts.
- Initialize the required objects: users and posts.
- Declare variables: accessToken, response.

**Preconditions:**
- The API is running and accessible.

**Test Scenarios:**

**Scenario 1: Create a Post Fields Validation (US002)**

- Objective: To verify the validation of post creation fields.
- Description: This scenario covers various test cases to ensure the proper validation of post fields during creation.
- Test Cases:
    - Test Case: Empty Title and Text
    - Test Case: Empty Text
    - Test Case: Empty Post Type
    - Test Case: Short Title
    - Test Case: Long Title
    - Test Case: Short Text
    - Test Case: Empty Link
    - Test Case: Invalid Link Extension
    - Test Case: Invalid Link URL
    - Test Case: Link and Text Combination
    - Test Case: Valid Post Creation

**Preconditions:**
Register a user with valid credentials.
Login using the registered user's credentials.
Retrieve the access token.

**Test Steps:**
- For each test case, provide the necessary input data and execute the post creation API request.
- Validate the response status code against the expected value.
- Validate the response status text against the expected value.

**Test Name:**
[US002-ssd.api.test](/src\api_test\US002\US002-ssd.api.test.ts)

**Description:**
These tests verify that a member can correctly make a post according to the acceptance criteria defined in US002. The tests cover scenarios where a post is created with text and with an embedded link.

**Endpoints Used:**

- `POST /users` - Create a user
- `POST /users/login` - User login
- `POST /posts` - Create a post

**Test Setup:**
- Import the necessary endpoint classes: Users and Posts.
- Initialize the required objects: posts and users.
- Declare variables: accessToken, response.

**Preconditions:**

- The API is running and accessible.

**Test Steps:**

1. Register a new member by sending a HTTP POST request to the /users endpoint with the following request body:
```json
{
  "email": "ole1@goge.pt",
  "username": "jone1",
  "password": "toze12341"
}
```
2. Extract the accessToken from the response.
3. Login the member by sending a HTTP POST request to the /users/login endpoint with the username and password from step 1.
4. Extract the accessToken from the response.
5. Create a post with text by sending a HTTP POST request to the /posts endpoint with the following request body:
```json
{
  "title": "A new post has arrived",
  "postType": "text",
  "text": "we must take the ring to mount doom",
  "link": ""
}
```
6. Extract the response.

7. Verify that the response status code is 200.

8. Verify that the response data is "OK".

**Test 2:**
1. Create a post with an embedded link by sending a HTTP POST request to the /posts endpoint with the following request body:

```json
{
  "title": "a new power rises",
  "postType": "link",
  "text": "",
  "link": "gondor.pt"
}
```
2. Extract the response.
3. Verify that the response status code is 200.
4. Verify that the response data is "OK".

**Test Data:**

**Registration Body:**
Email: ole1@goge.pt
Username: jone1
Password: toze12341

**Post with Text:**
Title: A new post has arrived
Post Type: text
Text: we must take the ring to mount doom
Link: (empty)

**Post with Link:**
- Title: a new power rises
- Post Type: link
- Text: (empty)
- Link: gondor.pt

**Test Execution:**

- Execute the test using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and look into any failures.

**Expected Results:**

- For Post with Text:
    - The response status code is 200.
    - The response data is "OK".

- For Post with Link:
    - The response status code is 200.
    - The response data is "OK".