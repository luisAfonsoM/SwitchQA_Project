# **API Test Documentation - US006**

## **Test Name:**

[US006-ssd.api.test](/src/api_test/US006/US006-ssd.api.test.ts)

**Description:** These tests verify the functionality of replying to a comment based on the acceptance criteria defined in US006.

&nbsp;&nbsp;&nbsp;&nbsp;

**Endpoints Used:**

- `POST /users` - Create a user
- `POST /users/login` - User login
- `POST /posts` - Create a post
- `POST /posts/{postId}/comments` - Create a comment on a post
- `POST /comments/{commentId}/upvote` - Upvote a comment
- `POST /comments/{commentId}/downvote` - Downvote a comment
- `GET /posts/{postId}/comments` - Get comments for a post
- `GET /posts/comments/{commentId}` - Get a comment
- `GET /posts/{postId}` - Get a post
- `POST /comments/{commentId}/replies` - Reply to a comment

&nbsp;&nbsp;&nbsp;&nbsp;

**Imports:**

- Import the necessary endpoint classes: `Users`, `Posts`, and `Comments`.

**Test Setup:**

1. Register one user using the `/users` endpoint with unique email, username, and password, using the following request body:

```json
{
  "email": "{email}",
  "username": "{username}",
  "password": "{password}"
}
```

2. Perform user login using the `/users/login` endpoint to obtain access tokens for the created user.
3. Create a post using the `/posts` endpoint using the following request body:

```json
{
  "title": "{title}",
  "postType": "text",
  "text": "{text body}",
  "link": ""
}
```

4. Extract the post slug from the response using the `getSlug`
   function.
5. Create a comment on the post using the `/posts/{postId}/comments` endpoint using the following request body:

```json
{
  "comment": "{comment}"
}
```

6. Get the comments for the post using `/posts/{postId}/comments` request.
7. Retrieve the commentId from `getComments` request the specific comment using the
   `getCommentData` function.

&nbsp;&nbsp;&nbsp;&nbsp;

---

## **SSD Alternative 1 - Member replies to a comment**

### **Preconditions:**

- One user created.
- A post is created.
- A comment is created on the post.

### **Test Steps:**

1.  Reply to the created comment using the POST request `/comments/{commentId}/replies`;
2.  Retrieve the updated Reply data using a GET request to the `/posts/{postId}/comments` endpoint.

### **Expected Results:**

- Validate that the response status is 200 and the status text is "OK";
- Reply parentId must be the same as the original commentID;
- Comment text must return the same as the sent via POST
  request `/posts/{postId}/comments`

&nbsp;&nbsp;&nbsp;&nbsp;

---

## **SSD Alternative 1 - Member replies to a comment (Backend Extension)** [Test Link](/src/api_test/US006/US006-ssd.api.test.ts#L80)

### **Preconditions:**

- One user created.
- A post is created.
- A comment is created on the post.

### **Test Steps:**

1.  Reply to the created comment using the POST request `/comments/{commentId}/replies`;
2.  Use the GET request `/posts/{postId}` to get the created post and their data;
3.  Use the GET request `/posts/{postId}/comments` to get the comments for the created post.

### **Expected Results:**

- Validate that the GET request `/posts/{postId}` presents a +1
  increase in the `numComments` field;
- Validate that the length of the comments array from the GET `/posts/{postId}/comments` response presents a +1
  increase.

&nbsp;&nbsp;&nbsp;&nbsp;

---

### **Notes on reply tests:**

The `childComments[]` field in the GET `/posts/{postId}/comments` endpoint will always be empty, regardless the number of comments/replies that have been created for the corresponding post (Bug Alert!).

---

&nbsp;&nbsp;&nbsp;&nbsp;

**Test Execution:**

- Execute the test suitev using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and look into any failures.
