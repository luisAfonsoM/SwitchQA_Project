**API Test Documentation**

**Test Name:** 
[SSD-api.test](/src/api_test/US007/US007-ssd.api.test.ts)

**Description:** These tests verify the functionality of upvoting and downvoting a post based on the acceptance criteria defined in the SSD.

**Endpoints Used:**
- `POST /users` - Create a user
- `POST /users/login` - User login
- `POST /posts` - Create a post
- `POST /posts/upvote` - Upvote a post
- `POST /posts/downvote` - Downvote a post
- `GET /posts/recent` - Get a post's details

**Test Setup:**
- Import the necessary endpoint classes: Users, Posts, and Comments.
- Initialize the required objects: users, posts, accessToken, postInfo, slugObject, response, comments, and regBody.
- Declare variables: postBody, regBody.

**Test Setup:**
1. Create a user using the `/users` endpoint with the email, username, and password provided in the regBody.
2. Perform user login using the `/users/login` endpoint to obtain an access token.
3. Create a post using the `/posts` endpoint using the post details provided in the postBody.
4. Extract the post slug and other details from the response.

**Preconditions:**
- A user is created.
- A post is created.

**Test Steps:**

1. **SSD Alternative 1 - Member upvotes a post**
- Test Steps:
   1. Send a request to upvote the post by sending a POST request to the `/posts/upvote` endpoint.
   2. Retrieve the updated post data using a GET request to the `/posts/{postSlug}` endpoint.
- Expected Results:
   - Validate that the response status is 200.
   - Validate that the points of the post have increased by 1.
- [Test Link](../../../src/api_test/US007/US007-ssd.api.test.ts#L26)

2. **SSD Alternative 2 - Member downvotes a post**
- Test Steps:
   1. Send a request to downvote the post using a POST request to the `/posts/downvote` endpoint.
   2. Retrieve the updated post data using a GET request to the `/posts/{postSlug}` endpoint.
- Expected Results:
   - Validate that the response status is 200.
   - Validate that the points of the post have decreased by 1.
- [Test Link](../../../src/api_test/US007/US007-ssd.api.test.ts#L54)

3. **SSD Alternative 3 - Member tries to upvote a previously upvoted post**
- Additional Pre-conditions: 
   - A post is upvoted.
- Test Steps:
   1. Send a request to upvote the post using a POST request to the `/posts/upvote` endpoint.
- Expected Results: 
   - Validate that the response status is 200.
   - Validate that the points of the post remain unchanged.
- [Test Link](../../../src/api_test/US007/US007-ssd.api.test.ts#L79)

4. **SSD Alternative 4 - Member tries to downvote a previously downvoted post**
- Additional Pre-conditions: 
   - A post is downvoted.
- Test Steps:
   1. Send multiple requests to downvote the post using a POST request to the `/posts/downvote` endpoint.
- Expected Results:
   - Validate that the response status is 200.
   - Validate that the points of the post remain unchanged.
- [Test Link](../../../src/api_test/US007/US007-ssd.api.test.ts#L105)

5. **SSD Alternative 5 - Member changes an upvote to a downvote**
- Additional Pre-conditions: 
   - A post is upvoted.
- Test Steps:
   1. Send a request to upvote the post using a POST  request to the `/posts/upvote` endpoint.
   2. Send a request to downvote the post using a POST  request to the `/posts/downvote` endpoint.
- Expected Results:
   - Validate that the response status is 200.
   - The post's points value remains unchanged (no increment or decrement).
- [Test Link](../../../src/api_test/US007/US007-ssd.api.test.ts#L131)

6. **SSD Alternative 6 - Member changes a downvote to an upvote**
- Additional Pre-conditions: 
   - A post is downvoted.
- Test Steps:
   1. Send a request to downvote the post using a POST  request to the `/posts/downvote` endpoint.
   2. Send a request to upvote the post using a POST  request to the `/posts/upvote` endpoint.
- Expected Results:
   - Validate that the response status is 200.
   - The post's points value remains unchanged (no increment or decrement).
- [Test Link](../../../src/api_test/US007/US007-ssd.api.test.ts#L157)
