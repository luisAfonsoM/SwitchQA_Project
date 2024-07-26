**API Test Documentation**

**Test Name:**
[US003-ssd.api.test](/src/api_test/US003/US003-ssd.api.test.ts)

**Description:** These tests verify the functionality of view a post defined on us003.

**Endpoints Used:**

- `POST /users` - Create a user
- `POST /users/login` - User login
- `POST /posts` - Create a post
- `GET /posts/popular` - Get popular posts
- `GET /posts/{slug}` - Get post by slug

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
5. Send a `GET /posts/{slug}` request, where `{slug}` is the extracted slug, to view the details of the link post.

**Preconditions:**

- The API is running and accessible.
- The necessary user credentials (email, password, username) are valid and unique.
- A post is created.

**Test Steps:**

1. **SSD Alternative 1**

- Test Steps:
  1.  Send a request in Json formart to the `POST /users` endpoint. 
  2.  Retrieve the access token by sending a `POST /users/login `request with the username and password.
  3. Send a request in Json format to the `POST /posts` endpoint. 
  4. Send a request to get throughout the `POST /recent` endpoint.
  5. Send a request to get thoughout the `POST / slug={{SLUG}}` endpoint.
- Expected Results:
  - Validate that the response status is 200 and the status text is "OK".
  - Validate that the mandatory key values should exist, such as title, post body(text or link).

**Post Conditions:**

- Status code is 200;
- statusText is Ok;
- Correcte post data and its data is displayed with correct information in post's page.
  1. Title is the same as the postBodyText title;
  2. Text must be the same as the postBodyText text;
  3. Username must the same as the publisher;
  4. For post with text, type of the post should be text and link field must be undefined;;
  5. For post with link, type of post should be link and the text should be undefined;
  
- Mandatory fields should exist:
  1. slug;
  2. created;
  3. memberPostedBy;


**Test Execution:**

- Execute the test using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and look into any failures.
