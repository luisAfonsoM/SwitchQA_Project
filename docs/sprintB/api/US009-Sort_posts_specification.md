## **API specification - Sort posts by Popular or New**

### **1.** 

### **1.1 Action:** 
GET

### **1.2 Description:** 
This HTTP request is meant to sort posts by popular or new.

### **1.3 Parameters:** 

* N/A

### **1.4 Request Format:**

*View Popular Posts*

* URI & Endpoint: http://localhost:5001/api/v1/posts/popular
* Format: JSON
* Request Body: N/A

*View New Posts*

* URI & Endpoint: http://localhost:5001/api/v1/posts/recent
* Format: JSON
* Request Body: N/A
       

### **1.5 Possible Response Codes and Results:** 

* 200 OK: The request must return this code if the popular or recent posts are sucessfully displayed {"OK"}
    * A successfull request returns the popular or new list of posts with the following info in the HTTP body:
    
    Body e.g.:

        {
            "posts": [
                {
                    "slug": "5964421-short-cuts-make-long-delays",
                    "title": "Short cuts make long delays",
                    "createdAt": "2023-06-25T18:00:03.000Z",
                    "memberPostedBy": {
                        "reputation": 0,
                        "user": {
                            "username": "Thorin"
                        }
                    },
                    "numComments": 1,
                    "points": 1,
                    "text": "The wise speak only of what they know.",
                    "link": "",
                    "type": "text",
                    "wasUpvotedByMe": false,
                    "wasDownvotedByMe": false
                }, ...    
            ]
        }         

### **2. User Stories:**

**US009:** Sort posts by Popular or New

**Acceptance Criteria:**
[Requirements Engineering](/docs//sprintA/us009/01.requirements-engeneering/readme.md)