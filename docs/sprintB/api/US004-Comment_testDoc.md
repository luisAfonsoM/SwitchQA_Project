**API Test Documentation**

**Test Name:** 
[US004-ssd.api.test](/src/api_test/US004/US004-ssd.api.test.ts)

**Description:**  These tests verify the functionality of creating a comment based on the acceptance criteria defined in US004.

**Endpoints Used:**
- `POST /users` - Create a user
- `POST /users/login` - User login
- `POST /posts` - Create a post
- `POST /posts/recent` - View posts
- `POST /posts/comments?slug={{postSlug}}` - Create a comment on a post

**Test Setup:**
- Import the necessary endpoint classes: Users, Posts, and Comments.
- Initialize the required objects: posts, users, comments.
- Declare variables: accessToken, response, slugPost.

**Preconditions:**
- The API is running and accessible.


**Test Steps:**
1. Register a new member by sending a HTTP POST request to the `/users` endpoint with the following request body:
```json
{
  "email": "{email}",
  "username": "{username}",
  "password": "{password}"
}
```
2. Extract the accessToken from the response.
3. Login the member by sending a HTTP POST request to the `/users/login` endpoint with the username and password from step 1.
4. Extract the accessToken from the response.
5. Create a new post by sending a HTTP POST request to the `/posts` endpoint with the following request body:
```json
{
  "title": "{title}",
  "postType": "text",
  "text": "{text body}",
  "link": ""
}
```
6. Create a new post by sending a HTTP POST request to the `/posts/recent` endpoint to extract the slug of the created post from the response.
7. Create a comment on the post by sending a HTTP POST request to the `/posts/comments?slug={{postSlug}}` endpoint with the following request body:
```json
{
  "comment": "{comment}"
}
```
8. Extract the response.

**Expected Results:**
- The response status code is 200.
- The response data is "OK".

**Test Data:**
- Registration Body:
  - Email
  - Username
  - Password
- Post title
- Post text
- Comment

**Test Execution:**
- Execute the test using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and look into any failures.

