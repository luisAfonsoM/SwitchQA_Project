## **API specification - US007 - Vote on a post**

### **1.** 

### **1.1 Action:** 
POST

### **1.2 Description:** 
This HTTP request is meant to register a vote on a post.

### **1.3 Parameters:** 

* accessToken
* slugObject

### **1.4 Request Format:**  

* URI & Endpoint: http://localhost:5001/api/v1/posts/{{voteArrow}}
* Format: JSON
* Request Body:

    Body e.g.

        {
            "slug": {{slug}}
        }   

### **1.5 Possible Response Codes and Results:** 

* 200 OK: The request must return this code if the vote is successful {"OK"}

* 403 Forbidden: The request must return this code if the accessToken is wrong or expired {"message": "Token signature expired."}

* 500 Internal Server Error: The request must return this code if the slug parameter is empty or doesn't fulfill criteria. {"message": "TypeError: Cannot read property 'toString' of undefined"}

* 500 Internal Server Error: The request must return this code if no slug was added to URI & Endpoint {"message": "TypeError: Cannot read property 'toString' of undefined"}

* 400 Bad Request: The request must return this code if the parameters are missing {"SyntaxError: Unexpected token"}

* 404 Not Found: The request must return this code if the slug is invalid {"message": "Couldn't find a post by slug {"(slug)"}."}

### **2. User Stories:**

**US007:** Vote on a post

**Acceptance Criteria:**
[Requirements Engineering](../..//sprintA/us007/01.requirements-engineering/readme.md)




