## **API specification - Vote on a comment**

### **Action:** 
POST

### **Description:** 
This HTTP request is meant to register a vote on a comment.

### **Parameters:** 

* accessToken
* comment_id
* vote_type

### **Request Format:**  

* URI & Endpoint: http://localhost:5001/api/v1/comments/{{comment_id}}/{{vote_type}}
* Format: JSON
* Header:
    Key: Authorization
    Value: accessToken
* Variables:
    comment_id: Id of a comment on a post
    vote_type: Either upvote or downvote 

    
    
### **Possible Response Codes and Results:** 

* 200 OK: The request must return this code if the user successfuly made a vote on a comment {"OK"}

* 403 Forbidden: The request must return this code if the accessToken is wrong or expired {"message": "Token signature expired."}

* 500 Internal Server Error: The request must return this code if the comment parameter is empty or doesn't fulfill criteria. {"message": "TypeError: Cannot read property 'toString' of undefined"}

* 500 Internal Server Error: The request must return this code if no slug was added to URI & Endpoint {"message": "TypeError: Cannot read property 'toString' of undefined"}

* 400 Bad Request: The request must return this code if the parameters are missing {"SyntaxError: Unexpected token"}

* 404 Not Found: The request must return this code if the slug is invalid {"message": "Couldn't find a post by slug {"(slug)"}."}


### **User Stories:**

**US008:** Vote on a comment

**Acceptance Criteria:**
[Requirements Engineering](/docs//sprintA/us004/01.requirements-engineering/readme.md)

