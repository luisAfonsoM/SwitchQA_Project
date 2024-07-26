# US 007 - Vote on a post

# 1. Tests

## Test 1: Member upvotes a post

**Preconditions:**

1. A member is logged into the system.
2. A post exists that has not been upvoted by the member.

**Test Steps:**

1. The member navigates to the post.
2. The member clicks on the upvote arrow.

**Expected Result:**
The post's score increases by one.

---

## Test 2: Member downvotes a post

**Preconditions:**

1. A member is logged into the system.
2. A post exists that has not been downvoted by the member.

**Test Steps:**

1. The member navigates to the post.
2. The member clicks on the downvote arrow.

**Expected Result:**
The post's score decreases by one.

---

## Test 3: Member tries to upvote a previously upvoted post

**Preconditions:**

1. A member is logged into the system.
2. A post exists that has been previously upvoted by the member.

**Test Steps:**

1. The member navigates to the post.
2. The member clicks on the upvote arrow again.

**Expected Result:**
The post's score decreases by 1.

---

## Test 4: Member tries to downvote a previously downvoted post

**Preconditions:**

1. A member is logged into the system.
2. A post exists that has been previously downvoted by the member.

**Test Steps:**

1. The member navigates to the post.
2. The member clicks on the downvote arrow again.

**Expected Result:**
The post's score does not change.

---

## Test 5: Member changes an upvote to a downvote

**Preconditions:**

1. A member is logged into the system.
2. A post exists that has been previously upvoted by the member.

**Test Steps:**

1. The member navigates to the post.
2. The member clicks on the downvote arrow.

**Expected Result:**
The post's score decreases by two.

---

## Test 6: Member changes a downvote to an upvote

**Preconditions:**

1. A member is logged into the system.
2. A post exists that has been previously downvoted by the member.

**Test Steps:**

1. The member navigates to the post.
2. The member clicks on the upvote arrow.

**Expected Result:**
The post's score increases by two.

---

## Test 7: Updated vote score value is immediately visible after a vote

**Preconditions:**

1. A member is logged into the system.
2. A post exists.

**Test Steps:**

1. The member navigates to the post.
2. The member casts a vote (either upvote or downvote).

**Expected Result:**
The updated score value is immediately visible to the member.

---

## Test 8: Visitor tries to upvote a post

**Preconditions:**

1. A post exists.

**Test Steps:**

1. The visitor navigates to the post.
2. The member hovers or clicks the upvote arrrow.

**Expected Result:**
A prompt to log in is displayed by the system with the message "Want to vote? You need to sign up [Here](https://dddforum.com/login).

---

## Test 9: Visitor tries to downvote a post

**Preconditions:**

1. A post exists.

**Test Steps:**

1. The visitor navigates to the post.
2. The visitor hovers or clicks the downvote arrow.

**Expected Result:**
A prompt to log in is displayed by the system with the message "Want to vote? You need to sign up [Here](https://dddforum.com/login).
