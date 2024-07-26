# US 004 - Write a comment on a post

## 1. Tests

## Test 1: Comment text has less than 20 characters.

**Preconditions:**

1. A member must be logged into DDD Forum.
2. A member must select an existing post.

**Test Steps:**

1. The member types a 19 characters commentary in the comment box.
2. The member attempts to submit the comment.

**Expected Result:**
The comment attempt fails, and an unsuccess message is displayed: "Yeahhhhh, comments should be 20 to 10000 characters. Yours was 19. 🤠”.

---

## Test 2: Comment text has more than 10000 characters.

**Preconditions:**

1. A member must be logged into DDD Forum.
2. A member must select an existing post.

**Test Steps:**

1. The member types a 10001 characters commentary in the comment box.
2. The member attempts to submit the comment.

**Expected Result:**
The comment attempt fails, and an unsuccess message is displayed: "Yeahhhhh, comments should be 20 to 10000 characters. Yours was 10001. 🤠”.

---

## Test 3: Member submits a comment

**Preconditions:**

1. A member must be logged into DDD Forum.
2. A member must select an existing post.

**Test Steps:**

1. The member types a comment of 20 or more characters and less than 10000 characters.
2. The member submits the comment.

**Expected Result:**
The comment submission is successfull, and success message is displayed: "Done-zo! 🤠"

---
## Test 4: Member submits a comment with 20 characters

**Preconditions:**

1. A member must be logged into DDD Forum.
2. A member must select an existing post.

**Test Steps:**

1. The member types a comment of 20 characters.
2. The member submits the comment.

**Expected Result:**
The comment submission is successfull, and success message is displayed: "Done-zo! 🤠"

---
## Test 5: Member submits a comment with 10000 characters

**Preconditions:**

1. A member must be logged into DDD Forum.
2. A member must select an existing post.

**Test Steps:**

1. The member types a comment of 10000 characters.
2. The member submits the comment.

**Expected Result:**
The comment submission is successfull, and success message is displayed: "Done-zo! 🤠"

---

## Test 6: visitor attempts to submit a comment

**Preconditions:**

1. A visitor must select an existing post.

**Test Steps:**

1. The visitor types a comment of 20 or more characters and less than 10000 characters.
2. The visitor attempts to submit the comment.

**Expected Result:**
The comment submission is unsuccessfull, and the unsuccess message is displayed: "Yeahhhhh, Token signature expired. 🤠"

---
