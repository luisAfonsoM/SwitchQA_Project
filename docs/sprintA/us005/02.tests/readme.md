# US 005 - View comments and their data

## 1. Tests

**Test 1: View comments on a post**

**Preconditions:**

1. At least one post exists in DDD Forum.
2. At least one comment must exist in a post.

**Test Steps:**

1. Navigate to the main page.
2. Verify that the posts feed is displayed.
3. Select a post with at least one comment.

**Expected Result:**
Inside the post page, all the comments and their data must be visible, showing the following information: score, upvote/downvote arrows, creator username, timestamp, and reply option.

---

**Test 2: Select a specific comment to view**

**Preconditions:**

1. At least one post exists in the DDD Forum.
2. At least one comment must exist in a post.

**Test Steps:**

1. Navigate to the main page.
2. Verify that the posts feed is displayed.
3. Select a post with at least one comment.
4. Select the timestamp of that specific comment.
5. Be redirected to a page with only that comment.

**Expected Result:**
The timestamp must redirect to the comment page where comment data is visible, showing the following information: vote count, creator username, timestamp, and reply option.

