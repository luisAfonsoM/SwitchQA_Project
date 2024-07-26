# US 019 - Members without activity (Posts and comments)
 
## 1. Requirements Engineering
 
### 1.1. User Story Description
 
As a Member, I want to know the members without any activity (posts and comments) in specific date.
 
### 1.2. Customer Specifications and Clarifications
_ As a member I want to be able to see all the users that didn't have any action on the DDD Forum.
 
### 1.3. Acceptance Criteria
 
**AC1:** The member must be logged into his account to access the statistic page.
 
**AC2:** When visit the statistic page I should see a field designated for User Without Activity.
 
**AC3:** Must be a insert field for the date of the users without any activity on a specific date.

**AC4:** Must be a submitt button in the Members Without Activity section.
 
**AC5:** If there isn´t users without activity the program must return a message to the user.
 
**AC6:** If a user add or remove a post or comment the list should b update and do not include thar user.
 
**AC7:** When visit the statistic page, the member should see a list indicating the members without activity.
 
**AC8:** The return should be the usernames of the members that didn´t have a post or comment in a specific date.
 
 
### 1.4. Found out Dependencies

_There is a dependency to "US001 - Register a new accouunt", since the member should be regitered._

_There is a dependency to "US011 - Login", since the member should be logged in._
 
_There is a dependency to "US010 - View member's profiles" since a member page must already exist._
 
 
### 1.5 Input and Output Data
 
**Input data**
;
- Selected data:
    YYYY/MM/DD
 
**Output data**
 
- When the return is true, all members withou activity is listed (username).
 
### 1.6. System Sequence Diagram (SSD)
 
#### Alternative One
 
![SSD - Alternative One]()
 
### 1.7 Other Relevant Remarks
 
none
 
### 1.8 Bugs
 
