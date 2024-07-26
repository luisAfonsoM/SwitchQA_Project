## **API Specification - View Post**

### **Action:**

GET

### **Description:**

This http request is meant to view the post from an user.

### **Parametres:**

* post slug

### **Request Format:**

*View Posts*
* URI & Endpoint: http://localhost:5001/api/v1/posts/popular
* Format: Json
* Body: N/A

*View Post*
* URI & Endpoint: http://localhost:5001/api/v1/posts?slug=2114227-isto-e-um-titulo
* Format: Json
* Body: N/A
* Params: slug: 2114227-isto-e-um-titulo


### **Possible Response Codes and Results:**

* 200 Ok: The request must return this code if the post is showed. ("OK").

* 500 Internal Server Error : "message": "Couldn't find a post by slug {undefined}."


### **User Stories:**

**US003:** View Post

**Accetance Criteria:**
[Requirements Engineering](/docs//sprintA/us003/01.requirements-engineering/readme.md)



