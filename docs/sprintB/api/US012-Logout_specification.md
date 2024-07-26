## **API specification - Logout**

### **1.**

### **1.1 Action:**  
POST

### **1.2 Description:** 
This HTTP request is meant to logout a user from their account.

### **1.3 Parameters:** 

* accessToken

### **1.4 Request Format:**  

* URI & Endpoint: http://localhost:5001/api/v1/users/logout
* Format: JSON
* Header:

    Key: Authorization

    Value: "(accessToken)"
    
### **1.5 Possible Response Codes and Results:**  

* 200 OK: The request must return this code if the user is successfuly logged out {"OK"}

* 403 Forbidden: The request must return this code if the accessToken is wrong or expired

    Body e.g:

        {"message": "Token signature expired."}

* 403 Forbidden: The request must return this code if the user already logged out 

    Body e.g:

        {"message": "Auth token not found. User is probably not logged in. Please login again."}

* 403 Forbidden: The request must return this code if the Key parameter is misspelled or if the Value parameter is empty

    Body e.g:

        {"message": "No access token provided"}

### **2. User Stories:**

**US012:** Logout

**Acceptance Criteria:**
[Requirements Engineering](/docs//sprintA/us012/01.requirements-engineering/readme.md)
