# US 020 - View Percentage of Posts Without Comments

## 1. Tests

### Test 1: Get statistics for a day with posts without any comments

**Preconditions:**

1. Member is logged in.
2. Posts are present for the selected day.

**Test Steps:**

1. Member selects a specific day with posts but no comments.
2. System calculates and displays the percentage.

**Expected Result:**

- The system displays a percentage of 100% for posts without comments.

### Test 2: Get statistics for a day with all posts having comments

**Preconditions:**

1. Member is logged in.
2. Posts are present for the selected day, and all have comments.

**Test Steps:**

1. Member selects this specific day.
2. System calculates and displays the percentage.

**Expected Result:**

- The system displays a percentage of 0% for posts without comments.

### Test 3: Get statistics for a day without posts

**Preconditions:**

1. Member is logged in.
2. No posts are present for the selected day.

**Test Steps:**

1. Member selects a day without posts.
2. System attempts to calculate statistics.

**Expected Result:**

- The system displays "No data found" or an equivalent message.

### Test 4: Get statistics with an invalid date format

**Preconditions:**

1. Member is logged in.
2. Member inputs a date in an incorrect format.

**Test Steps:**

1. Member inputs the wrong date format and requests statistics.
2. System validates the date format and processes the request.

**Expected Result:**

- The system displays an error message: "Invalid date format. Please use MM/DD/YYYY."