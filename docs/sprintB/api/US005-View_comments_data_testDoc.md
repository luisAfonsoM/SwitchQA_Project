## API Test Documentation

### Description
This API test documentation covers the "US005 - visitor views comments and their data" scenario. The tests verify the functionality of creating a comment, viewing comments, and their data.

### Endpoints Used
- `POST /users` - Create a user
- `POST /users/login` - User login
- `POST /posts` - Create a new post
- `GET /posts/new` - Get the new posts
- `GET /posts/{slug}/comments` - Get post comments
- `POST /posts/{slug}/comments` - Create a comment on a post
- `GET /comments/{commentId}` - Get a comment by its ID.

### Test Setup
1. Import the `Users`, `Posts`, and `Comments` modules from their respective files.
2. Initialize the `posts`, `users`, and `comments` objects.
3. Declare variables to store: the response, access token, slug of a post, post comment body, and registration body.
4. Set the registration body with the email, username, and password.
5. Register a user by sending a POST request to the `/users` endpoint with the registration body.
6. Perform a login by sending a POST request to the `/users/login` endpoint with the registered username and password.
7. Store the access token from the login response.
8. Create a new post by sending a POST request to the `/posts` endpoint with the post body and the stored access token.
9. Get the new posts by sending a GET request to the `/posts/new` endpoint.
10. Extract the slug of the created post using the `getSlug` method from the `Posts` module.
11. Set the post comment body.
12. Create a comment on the post by sending a POST request to the `/posts/{slug}/comments` endpoint with the slug, post comment body, and the stored access token.

### Preconditions
- The API server is running and accessible.
- The test user with the provided email, username, and password does not exist in the database.
- The test post and comment do not exist in the database.

### Test Steps and Expected Results

#### SSD1 - View comments and their data by selecting the post
1. Send a GET request to the `/posts/{slug}/comments` endpoint with the slug of the post.
2. Verify that the response status code is 200 (OK).

#### SSD2 - View a comment and its data by selecting the comment timestamp
1. Get the comment ID by using the `getCommentData` method from the `Comments` module.
2. Send a GET request to the `/comments/{commentId}` endpoint with the comment ID.
3. Verify that the response status code is 200 (OK).

### Test Data
- Registration Body:
  - Email
  - Username
  - Password
- Post Body:
  - Title
  - Post Type
  - Text
  - Link
- Comment Body:
  - Comment

**Test Execution:**
- Execute the test using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and look into any failures.