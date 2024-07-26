## **API specification - Reply to a comment on a post**

### **1.**

### **1.1 Action:**

POST

### **1.2 Description:**

This HTTP request is meant to reply to a comment on a post.

&nbsp;&nbsp;&nbsp;&nbsp;

### **1.3 Parameters:**

- accesstoken
- slugPost
- comment id

&nbsp;&nbsp;&nbsp;&nbsp;

### **1.4 Request Format:**

- URI & Endpoint: `http://localhost:5001/api/v1/comments{{commentId}}/reply?slug={{postSlug}}`

- Format: JSON

- Header:

  ```json
  Key: Authorization

  Value: {{accessToken}}
  ```

- Parameters:

  - comment_id: Id of a comment on a post

  - slugPost: Slug of the post

- Body:

    ```json
    {
      "comment": "{comment}"
    }
    ```

&nbsp;&nbsp;&nbsp;&nbsp;

### **1.5 Possible Response Codes and Results:**

- 200 OK: The request must return this code if a reply to a comment on a post is successfuly created {"OK"}

- 403 Forbidden: The request must return this code if the accessToken is wrong or expired

  Body e.g.:

        {"message": "Token signature expired."}

- 500 Internal Server Error: The request must return this code when it doesn't fulfill criteria.

  Body e.g.:

        {"message": "TypeError: Cannot read property 'toString' of undefined"}

- 400 Bad Request: The request must return this code when the parameters are missing

  Body e.g.:

        {"SyntaxError: Unexpected token"}

&nbsp;&nbsp;&nbsp;&nbsp;

---

### **2. User Stories:**

**US006:** Reply to a comment on a post

**Acceptance Criteria:**
[Requirements Engineering](/docs//sprintA/us006/01.requirements-engineering/readme.md)

**Notes on Backend Acceptance Criteria**: _AC4 The field text must contain at least 2 to max 10000 characters to be valid and posted._
