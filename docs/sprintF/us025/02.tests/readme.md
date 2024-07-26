# US 025 - Display color yellow on Recent Posts Filter

## 1. Tests

### Test 1: Verify Highlighting on Posts Without Comments

**Preconditions:**

1. Member is logged in.
2. Recent posts filter contains on post created 3 days ago.

**Test Steps:**

1. Member navigates to the Recent posts filter.
2. Observes a post created 3 days ago.

**Expected Result:**

- That post must have the date stamp text at yellow.

### Test 2: Test the minimal limit

**Preconditions:**

1. Member is logged in.
2. Recent posts filter contains on post created 2 days ago.

**Test Steps:**

1. Member navigates to the Recent posts filter.
2. Observes a post created 2 days ago.

**Expected Result:**

- *Must discuss with PO the outcome*

### Test 3: Test the maximum limit

**Preconditions:**

1. Member is logged in.
2. Recent posts filter contains on post created 7 days ago.

**Test Steps:**

1. Member navigates to the Recent posts filter.
2. Observes a post created 7 days ago.

**Expected Result:**

- *Must discuss with PO the outcome*

### Test 4: Verify Functionality for Non-Logged-In Users

**Preconditions:**

1. Member is not logged in.
2. Navigates to Recent posts page.

**Test Steps:**

1. Member views Recent posts.

**Expected Result:**

- Posts older than 2 days and newer than 7 must not be Highlighted.
