**Test 1: Display the post title with more comments for a specific day with valid data**

**Preconditions:**

1. The member is logged in and on the statistics page.

**Test Steps:**

1. The member selects a specific day that has posts with comments.
2. The member clicks the submit button to request the post title.

**Expected Result:**
The system filters the posts for the selected day and displays the one that has more comments to the member.

---

**Test 2: Display the post title with more comments for a specific day without valid data**

**Preconditions:**

1. The member is logged in and on the statistics page.

**Test Steps:**

1. The member selects a specific day that has no posts.
2. The member clicks the submit button to request the average of comments.

**Expected Result:**
The system displays a error message: "No data found".

---

**Test 3: Display the post title with more comments with invalid date format**

**Preconditions:**

1. The member is logged in and on the statistics page.

**Test Steps:**

1. The member enters a date in an invalid format.
2. The member clicks the submit button to request the post title.

**Expected Result:**
The system displays an error message: "Inserted date is not valid, please refresh and try again 😎".

---

**Test 4: Display the post title with more comments for a specific day with non-member access**


**Test Steps:**

1. The non-member user attempts to access the statistics page.

**Expected Result:**
The system prevents the non-member user from accessing the statistics page and displays a message indicating that only members can access this page.

---

**Test 5: Display the post title with more comments for a specific day and refreshing the values**

**Preconditions:**

1. The member is logged in and on the statistics page.

**Test Steps:**

1. The member selects a specific day that has posts with comments.
2. The member clicks the submit button to request the post title.
3. The member clicks the refresh button to refresh the values.

**Expected Result:**
The system clears the result data and the date field box back to it's original values.

---

