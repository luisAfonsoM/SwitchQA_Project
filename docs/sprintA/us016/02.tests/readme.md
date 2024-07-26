# US016 - Average of posts per day

## 1. Tests

**Test 1: Average of posts in a specific date with posts - AC6 and AC7.**

**Preconditions:**

1. Member must be logged in and on the statistics page.

**Test Steps:**

1. Go to "Average of posts on a Specific Date" section.
2. Insert a specific date with posts in the required format YYYY-MM-DD.
3. The member clicks on the submit button to request the average of posts.


**Expected Result:**

1. The system displays the average number of posts for the selected day.

---

**Test 2: Average of posts in a specific date without posts - AC8**

**Preconditions:**

1. Member must be logged in and on the statistics page.

**Test Steps:**

1. Go to "Average of posts on a Specific Date" section.
2. Insert a specific date without posts, in the required format YYYY-MM-DD.
3. The member clicks on the submit button to request the average of posts.

**Expected Result:**

1. The system displays "No data found".

**Test 3: Average of posts with invalid date format - AC5/AC9**

**Preconditions:**

1. Member must be logged in and on the statistics page.

**Test Steps:**

1. Go to "Average of posts on a Specific Date" section.
2. Insert a date in an invalid format.
3. The member clicks on the submit button to request the average of posts.

**Expected Result:**

1. The system displays an error message: "Inserted date is not valid, please refresh and try again 😎".

**Test 4: Average of posts with real-time update - AC6 and AC7**

**Preconditions:**

1. Member must be logged in and on the statistics page.

**Test Steps:**

1. Go to "Average of posts on a Specific Date" section.
2. Insert todays date in the required format YYYY-MM-DD.
3. Click on the submit button to request the average of posts.
4. Make a new post in the forum.
5. Repeat step 1 and 2 and 3.

**Expected Result:**

1. The system updates the average number of posts for the selected day.

**Test 5: Average of posts - refresh button - AC10**

**Preconditions:**

1. Member must be logged in and on the statistics page.

**Test Steps:**

1. Go to "Average of posts on a Specific Date" section.
2. Insert a date in the required format YYYY-MM-DD.
3. Click on the submit button to request the average of posts.
4. Click on the refresh button to reset data.

**Expected Result:**

1. The system should reset data on the fields "Date" and "Result".
