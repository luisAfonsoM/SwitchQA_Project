# US022 - Recent posts highlighted with a red background

## 1. Tests

**Test 1: Recent posts highlighted with a red background - AC1, AC2, AC3**

**Preconditions:**

1. Member is logged in
2. At least three posts exists with comments, and at least one post has a significantly higher number of comments than others.

**Test Steps:**

1. Select the option to sort by new posts.
2. Identify the post with the highest number of comments.
3. Determine posts with less than 1/3 of the comments from the post identified in step 2.

**Expected Result:**

1. Posts with less than 1/3 of the comments from the post with the highest comments, should be highlighted with a red background.


**Test 2: Recent posts without comments - AC1, AC2, AC3**

**Preconditions:**

1. Member is logged in
2. Posts without comments must exist

**Test Steps:**

1. Select the option to sort by new posts.

**Expected Result:**

1. Posts should not have background color.

**Test 3 : Member is not logged in - AC1, AC2**

**Preconditions:**

1. Member is not logged in
2. Multiple posts exist with comments, and at least one post has a significantly higher number of comments than others.

**Test Steps:**

1. Select the option to sort by new posts.

**Expected Result:**

1. No posts should have a highlighted background.

