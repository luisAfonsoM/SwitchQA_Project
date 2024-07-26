## **API Specification - View Comments and their data**

### **Action:**

GET

### **Description:**

This http request is meant to view a coment and their data from user perpesctive.

### **Parametres:**

* post id

### **Request Format:**

*View Comments*

* URI & Endpoint: http://localhost:5001/api/v1/comments?slug=6847755-titulo

Format: Json

Body: N/A

*View Comments*

* URI & Endpoint: http://localhost:5001/api/v1/comments/{{commentId}}

Format: Json

Body: N/A

### **Possible Response Codes and Results:**


GET Comments:

* 200 OK: The request must return this code if the comments is showed. ("OK").

GET by Timestamp:

* 404 Not Found: "message": "Couldn't find a comment by comment id {7ab2fb36-8727-4bc6-b0aa-60997530f5fa}."

* 


### **User Stories:**

**US005:** View Comments


**Accetance Criteria:**
[Requirements Engineering]()



