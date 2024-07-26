## **API specification - Create a post**

### **Action:** 
POST

### **Description:** 
This HTTP request is meant to create a post as a member using their account.

### **Parameters:** 

* accessToken
* title
* postType
* text
* link

### **Request Format Alternative one:**  

* URI & Endpoint: http://localhost:5001/api/v1/posts
* Format: JSON
* Header:
    Authorization: "acessToken"
* Body:
{

    "title": "(post)",

    "postType": "text",

    "text": "(post content)",

    "link": "(link)"

}

### **Request Format Alternative two:**

* URI & Endpoint: http://localhost:5001/api/v1/posts
* Format: JSON
* Header:
    Authorization: "acessToken"
* Body:
{

    "title": "(title)",

    "postType": "link",

    "text": "(post content)",

    "link": "(link)"

}
    
### **Possible Response Codes and Results:** 

* 200 OK: The request must return this code when the member successfuly creates a post {"OK"}

* 403 Forbidden: The request must return this code when the accessToken is wrong or expired {"message": "Token signature expired."}

* 500 Internal Server Error: The request must return this code when it doesn't fulfill criteria. {"message": "TypeError: Cannot read property 'toString' of undefined"}

* 400 Bad Request: The request must return this code when the parameters are missing {"SyntaxError: Unexpected token"}

### **User Stories:**

**US002:** create a post

**Acceptance Criteria:**
[Requirements Engineering](/docs//sprintA/us002/01.requirements-engineering/readme.md)
