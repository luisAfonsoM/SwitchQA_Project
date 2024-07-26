**API Test Documentation**

**Test Name:** 
[US008-ssd.api.test](/src/api_test/US008/US008-ssd.api.test.ts)

**Description:** These tests verify the functionality of votting on a comment based on the acceptance criteria defined in US008.

**Endpoints Used:**
- `POST /users` - Create a user
- `POST /users/login` - User login
- `POST /posts` - Create a post
- `POST /posts/{postId}/comments` - Create a comment on a post
- `POST /comments/{commentId}/upvote` - Upvote a comment
- `POST /comments/{commentId}/downvote` - Downvote a comment
- `GET /posts/{postId}/comments` - Get comments for a post
- `POST /comments/{commentId}/replies` - Reply to a comment

**Test Setup:**
- Import the necessary endpoint classes: Users, Posts, and Comments.
- Initialize the required objects: comments, regBody, regBodyTwo, response, postCommentBody, getInitialScore and replyContent.
- Declare variables: accessToken, accessTokenTwo and slugPost.

**Test Setup:**
1. Create two users using the `/users` endpoint with different emails, usernames, and password combinations, using the following request body:
```json
{
  "email": "{email}",
  "username": "{username}",
  "password": "{password}"
}
```
2. Perform user login using the `/users/login` endpoint to obtain access tokens for the users.
3. Create a post using the `/posts` endpoint using the following request body:
```json
{
  "title": "{title}",
  "postType": "text",
  "text": "{text body}",                       
  "link": ""
}
```
4. Extract the post slug from the response.
5. Create a comment on the post using the `/posts/{postId}/comments` endpoint using the following request body:
```json
{
  "comment": "{comment}"
}
```
6. Extract the comment ID and initial score for future validation.
7. Perform user login for the second user to obtain another access token.

**Preconditions:**
- Two users are created. 
- A post is created.
- A comment is created on the post.

**Test Steps:**
[Tests Link](../../../src/api_test/US008/US008-ssd.api.test.ts)

1. **SSD Alternative 1 - Member upvotes comment**
- Test Steps:
   1. Send a request to upvote the comment by sending a POST request to the `/comments/{commentId}/upvote` endpoint.
   2. Retrieve the updated comment data using a GET  request to the `/posts/{postId}/comments` endpoint.
- Expected Results:
   - Validate that the response status is 200 and the status text is "OK".
   - Validate that the points of the comment have increased by 1.

2. **SSD Alternative 2 - Member downvotes comment**
- Test Steps:
   1. Send a request to downvote the comment using a POST request to the `/comments/{commentId}/downvote` endpoint.
   2. Retrieve the updated comment data using a GET request to the `/posts/{postId}/comments` endpoint.
- Expected Results:
   - Validate that the response status is 200 and the status text is "OK".
   - Validate that the points of the comment have decreased by 1.

3. **SSD Alternative 3 - Member upvotes a previously upvoted comment**
- Test Steps:
   1. Send multiple requests to upvote the comment using a POST request to the `/comments/{commentId}/upvote` endpoint.
- Expected Results: 
   - Validate that the points of the comment remain unchanged.

4. **SSD Alternative 4 - Member downvotes a previously downvoted comment**
- Test Steps:
   1. Send multiple requests to downvote the comment using a POST request to the `/comments/{commentId}/downvote` endpoint.
- Expected Results:
   - Validate that the points of the comment remain unchanged.

5. **SSD Alternative 5 - Member changes upvote to downvote**
- Test Steps:
   1. Send a request to upvote the comment using a POST  request to the `/comments/{commentId}/upvote` endpoint.
   2. Send a request to downvote the comment using a POST  request to the `/comments/{commentId}/downvote` endpoint.
- Expected Results:
    - The comment's points value remains unchanged (no increment or decrement).

6. **SSD Alternative 6 - Member changes downvote to upvote**
   - Test Steps:
     1. Downvote a comment using a POST request to the `/comments/{commentId}/downvote` endpoint.
     2. Upvote the same comment using the `/comments/{commentId}/upvote` endpoint.
     3. Retrieve the comment data using the `/comments/{commentId{}` endpoint.
   - Expected Results:
     - The comment's points value remains unchanged (no increment or decrement).

8. **SSD Alternative 8 - Member upvotes a reply to a comment**
- Test Steps:
   1. Send a request to upvote the comment by sending a POST request to the `{commentId}/reply?slug=${postSlug}`,` endpoint.
   2. Retrieve the updated comment data using a GET request to the `/posts/{postId}/comments` endpoint.
- Expected Results:
   - Validate that the response status is 200 and the status text is "OK".
   - Validate that the points of the comment reply have increased by 1.

9. **SSD Alternative 9 - Member downvotes a reply to a comment**
- Test Steps:
   1. Send a request to upvote the comment by sending a POST request to the `{commentId}/reply?slug=${postSlug}`,` endpoint.
   2. Retrieve the updated comment data using a GET request to the `/posts/{postId}/comments` endpoint.
- Expected Results:
   - Validate that the response status is 200 and the status text is "OK".
   - Validate that the points of the comment reply have decreased by 1.

**Test Execution:**
- Execute the test suitev using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and look into any failures.