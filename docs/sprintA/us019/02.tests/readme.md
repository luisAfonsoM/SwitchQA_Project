# US 019 - Members without activity (Posts and comments)
 
## 1. Tests
 
## Test 1: At least one user should not post or comment
 
**Preconditions:**
 
1. A member must be logged into DDD Forum.
2. A member must select a date.
 
 
**Test Steps:**
 
1. Member insert a day to filter all the members without activity.
2. Member submits and system validates request.
 
**Expected Result:**
 
The system display the usernames that didn´t interact in any way in the screen.
---
 
## Test 2: Get a date where all the users did at least one action
 
**Preconditions:**
1. A member must be logged into DDD Forum.
2. Member insert a valid date in the past or the current day and submitt.
 
**Test Steps:**
 
1. Member insert a day to filter all the members without activity.
2. Member submits and system validates request.
 
**Expected Result:**
 
The system display "No resultts" in the screen.
---
 
### Test 3: Get a date in invalid format
 
**Preconditions:**
 
1. A member must be logged into DDD Forum.
2. Member insert an invalid date.
 
**Test Steps:**
 
1. Member inputs the wrong date format.
2. Member submits and system validates request.
 
**Expected Result:**
 
- The system displays an error message: "Invalid date format. Please use YYYY
/MM/DD".