# US 008 - Vote on a comment

# 1. Tests

## Test 1: Member upvotes a comment

**Preconditions:**

1. A member is logged into DDD Forum.
2. A comment exists that has not been upvoted by the member.

**Test Steps:**

1. The member navigates to the comment.
2. The member clicks on the upvote arrow.

**Expected Result:**
The comment's score increases by one.

---

## Test 2: Member downvotes a comment

**Preconditions:**

1. A member is logged into DDD Forum.
2. A comment exists that has not been downvoted by the member.

**Test Steps:**

1. The member navigates to the comment.
2. The member clicks on the downvote arrow.

**Expected Result:**
The comment's score decreases by one.

---

## Test 3: Member tries to upvote a previously upvoted comment

**Preconditions:**

1. A member is logged into the system.
2. A comment exists that has been previously upvoted by the member.

**Test Steps:**

1. The member navigates to the comment.
2. The member clicks on the upvote arrow again.

**Expected Result:**
The comment's score does not change.

---

## Test 4: Member tries to downvote a previously downvoted comment

**Preconditions:**

1. A member is logged into DDD Forum.
2. A comment exists that has been previously downvoted by the member.

**Test Steps:**

1. The member navigates to the comment.
2. The member clicks on the downvote arrow again.

**Expected Result:**
The comment's score does not change.

## Test 5: Member changes an upvote to a downvote

**Preconditions:**

1. A member is logged into DDD Forum.
2. A comment exists that has been previously upvoted by the member.

**Test Steps:**

1. The member navigates to the comment.
2. The member clicks on the downvote arrow.

**Expected Result:**
The comment's score decreases by one.

---

## Test 6: Member changes a downvote to an upvote

**Preconditions:**

1. A member is logged into DDD Forum.
2. A comment exists that has been previously downvoted by the member.

**Test Steps:**

1. The member navigates to the comment.
2. The member clicks on the upvote arrow.

**Expected Result:**
The comment's score increases by one.

---

## Test 7: Updated vote score value is immediately visible after a vote

**Preconditions:**

1. A member is logged into DDD Forum.
2. A comment exists.

**Test Steps:**

1. The member navigates to the comment.
2. The member casts a vote (either upvote or downvote).

**Expected Result:**
The updated score value is immediately visible to the member.

---

## Test 8: Visitor tries to upvote or downvote a comment

**Preconditions:**

1. A comment exists.

**Test Steps:**

1. A visitor navigates to the comment.
2. A visitor hovers or presses the upvote button

**Expected Result:**
A prompt to log in is displayed by the system with the message "Want to vote? You need to sign up [Here](https://DDDForum.com/login)".

---

## Test 9: Member tries to vote on a reply page, to a reply to a comment.

**Preconditions:**

1. A comment exists.
2. A reply to a comment exists.

**Test Steps:**

1. The member navigates to the comment.
2. The member navigates to the reply to a comment section.
3. The member upvotes a reply.

**Expected Result:**
The reply's score increases by one.
