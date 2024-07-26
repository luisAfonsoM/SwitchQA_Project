## **API specification - Login**

### **1.** 

### **1.1 Action:** 
POST

### **1.2 Description:** 
This HTTP request is meant to login a user into their account.

### **1.3 Parameters:** 

* username
* password

### **1.4 Request Format:**  

* URI & Endpoint: http://localhost:5001/api/v1/users/login
* Format: JSON

    Body e.g.:

        {
            "username": "(username)",
            "password": "(password)"
        }          

### **1.5 Possible Response Codes and Results:** 

* 200 OK: The request must return this code if the user is successfuly logged in {"OK"}
    * A sucessfull request returns an "accessToken" and a "refreshToken" in the HTTP body data.
    
    Body e.g.:

        {"accessToken": "(accessToken)","refreshToken": "(refreshToken)"}

* 500 Internal Server Error: The request must return this code if the username or password parameter are invalid

    Body e.g.:
    
        {"message": "TypeError: Cannot read property 'toString' of undefined"}

* 500 Internal Server Error: The request must return this code if the username parameter isn't registered in the database 

    Body e.g.:
    
        {"message": "An unexpected error occurred."}

* 500 Internal Server Error: The request must return this code if any of the parameters are empty

    Body e.g.:
        
        {"TypeError: Cannot read property 'toString' of undefined"}

* 400 Bad Request: The request must return this code if the password parameter is incorrect

    Body e.g.:
    
        {"message": "Password doesnt match error."}

* 400 Bad Request: The request must return this code if the parameters don't exist

    Body e.g.:
        
        {"SyntaxError: Unexpected token"}

### **2.** 
### **2.1 Action:** 
GET

### **2.2 Description:** 
This HTTP request verifies if the user is logged in.

### **2.3 Parameters:** 

* accessToken
* username
* password

### **2.4 Request Format:**  

* URI & Endpoint: http://localhost:5001/api/v1/users/me
* Format: JSON
* Header:
    Key: Authorization
    Value: "(accessToken)"

    Body e.g:

        {
            "username": "(username)",
            "password": "(password)"
        }

### **2.5 Possible Response Codes and Results:** 

* 200 OK: The request must return this code if the user is logged in {"OK"}

    Body e.g.:

        {
            "user": {
                "username": "Teste15",
                "isEmailVerified": false,
                "isAdminUser": false,
                "isDeleted": false
            }
        }

* 403 Forbidden: The request must return this code if the user isn't logged in

    Body e.g.:
    
        {"message": "Auth token not found. User is probably not logged in. Please login again."}

* 403 Forbidden: The request must return this code if the accessToken or Key parameter isn't provided

    Body e.g.:

        {"message": "No access token provided"}

* 403 Forbidden: The request must return this code if the accessToken is expired
    
    Body e.g.:

        {"message": "Token signature expired."}

* 400 Bad Request: The request must return this code if the parameters don't exist

    Body e.g.:

        {"SyntaxError: Unexpected token"}

* 500 Internal Server Error: The request must return this code if the username and password parameters are empty

    Body e.g.:
        
        {"message": "TypeError: Cannot read property 'toString' of undefined"}

### **3. User Stories:**

**US011:** Login

**Acceptance Criteria:**
[Requirements Engineering](/docs//sprintA/us011/01.requirements-engeneering/readme.md)



