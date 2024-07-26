# US 026 - Highlight Posts Without Comments

## 2. Tests

### Test 1: Verify Highlighting on Post Without Comments

**Preconditions:**

1. Member is logged in.
2. Popular posts filter is enabled with at least one post without comments.

**Test Steps:**

1. Observes a post without comments.

**Expected Result:**

- Posts without comments should have a purple text stating “Please comment me”, and it should be a hyperlink.

### Test 2: Verify No Highlighting on Post Without Comments

**Preconditions:**

1. Member is logged in.
2. Popular posts filter is enabled with at least one post without comments.

**Test Steps:**

1. Member changes filter to recent.
2. Observes a post without comments.
3. Member changes filter to unpopular.
4. Observes a post without comments.

**Expected Result:**

- On both filter options posts without comments should NOT have a purple text stating “Please comment me”, and it should be a hyperlink.

### Test 3: Verify Removal of Highlighting After Receiving Comments

**Preconditions:**

1. Member is logged in.
2. A post without comments, highlighted in purple, is present.

**Test Steps:**

1. The member posts a comment on the highlighted post.
2. The member refreshes or revisits the popular posts page.

**Expected Result:**

- The highlighting and the “Please comment me” text should disappear from the post.

### Test 3: Verify Link Redirects to Comment Posting Page

**Preconditions:**

1. Member is logged in.
2. Posts without comments, highlighted in purple, are present.

**Test Steps:**

1. Member clicks on the “Please comment me” text on a post without comments.
2. Observes the redirection.

**Expected Result:**

- Clicking the text should redirect the member to the comment posting page for that specific post.

### Test 4: Verify Functionality for Non-Logged-In Users

**Preconditions:**

1. User is not logged in.
2. Navigates to the popular posts filter.

**Test Steps:**

1. User views popular posts.

**Expected Result:**

- Posts without comments should NOT show the purple text or any highlighting for non-logged-in users.
