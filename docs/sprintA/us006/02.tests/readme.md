# US 006 - Reply to a comment on a post

# 1. Tests

## Test 1: Reply attempt with less than 20 characters.

**Preconditions:**

1. Member must be logged in.
2. Member must select an existing post with comments.

**Test Steps:**

1. Member must select the "reply" option of a comment.
2. Member types a 19 characters reply.
3. Member attempts to submit the reply.

**Expected Result:**
The reply submission fails and an unsuccess message is displayed: "Yeahhhhh, comments should be 20 to 10000 characters. Yours was 19. 🤠"

---

## Test 2: Reply attempt with more than 10000 characters.

**Preconditions:**

1. Member must be logged in.
2. Member must select an existing post with comments.

**Test Steps:**

1. Member must select the "reply" option of a comment.
2. Member types a 10001 characters reply.
3. Member attempts to submit the reply.

**Expected Result:**
The reply submission fails and an unsuccess message is displayed: "Yeahhhhh, comments should be 20 to 10000 characters. Yours was 10001. 🤠"

---

## Test 3: Reply to a comment

**Preconditions:**

1. Member must be logged in.
2. Member must select an existing post with comments.

**Test Steps:**

1. Member must select the "reply" option of a comment.
2. Member types a 5010 characters reply.
3. The member submits the reply.

**Expected Result:**
A success message is displayed, indicating that the reply has been submitted successfully: “Done-zo! 🤠"

## Test 4: Reply to a comment with 20 characters

**Preconditions:**

1. Member must be logged in.
2. Member must select an existing post with comments.

**Test Steps:**

1. Member must select the "reply" option of a comment.
2. Member types a 20 characters reply.
3. The member submits the reply.

**Expected Result:**
A success message is displayed, indicating that the reply has been submitted successfully: “Done-zo! 🤠"

## Test 5: Reply to a comment with 10000 characters

**Preconditions:**

1. Member must be logged in.
2. Member must select an existing post with comments.

**Test Steps:**

1. Member must select the "reply" option of a comment.
2. Member types a 10000 characters reply.
3. The member submits the reply.

**Expected Result:**
A success message is displayed, indicating that the reply has been submitted successfully: “Done-zo! 🤠"

## Test 6: visitor attempts to reply to a comment

**Preconditions:**

1. A visitor must select an existing post.
2. A visitor must select an existing comment.

**Test Steps:**

1. The visitor types a comment of 20 or more characters and less than 10000 characters.
2. The visitor attempts to submit the reply.

**Expected Result:**
The reply submission is unsuccessfull, and the unsuccess message is displayed: "Yeahhhhh, Token signature expired. 🤠"

---
