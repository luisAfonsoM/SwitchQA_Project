## **API specification - Register**

### **1.**

### **1.1 Action:**

- POST

### **1.2 Description:**

This HTTP request is meant to create an user's account.

### **1.3 Parameters:**

- username
- email
- password

### **1.4 Request Format:**

- URI & Endpoint: http://localhost:5001/api/v1/users/
- Format: JSON
- Body:

```
  {

  "username": "(username)",

    "email": "(email)",

    "password": "(password)"

  }
```

&nbsp;&nbsp;&nbsp;&nbsp;

### **1.5 Possible Response Codes and Results:**

- 200 OK: The request must return this code if the account is successfuly created {"OK"}

- 400 Bad Request: The request must return this code if the parameters are missing {"SyntaxError: Unexpected token"}

- 404 Not Found: The request must return this code if it can't connect to the server

- 409 Conflit: The request must return this code if the email or username already exists in the database {"message":"The email xxx associated for this account already exists"} {"message": "The username xxx was already taken"}

- 500 Internal Server Error: The request must return this code if any of the parameters are empty {"TypeError: Cannot read property 'toString' of undefined"}

- 500 Internal Server Error: The request must return this code if the email, username or password parameter isn't valid {"message": "TypeError: Cannot read property 'toString' of undefined"}

- 500 Internal Server Error: The request must return this code if the username parameter is above 15 characters {"message":"Error: InvalidOperation: A failing result needs to contain an error message"}

&nbsp;&nbsp;&nbsp;&nbsp;

### **3. User Stories:**

**US001:** Register a new account

**Acceptance Criteria:**
[Requirements Engineering](/docs//sprintA/us001/01.requirements-engineering/readme.md)
