# US 002 - Create a post

## 1. Tests

**Test 1: Post Creation attempt with 1 character title**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member enters a title with 1 character.
2. The member enters a text body with more than 20 characters and fewer than 10000 characters.
3. The member attempts to submit the post creation form.

**Expected Result:**
The post is not accepted and an insuccess message is displayed:"Yeahhhhh, title should be 2 to 85 characters. Yours was 1. 🤠”

---

**Test 2: Post Creation attempt with 86 character title**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member enters a title with 86 characters.
2. The member enters a text body with more than 20 characters and fewer than 10000 characters.
3. The member attempts to submit the post creation form.

**Expected Result:**
The post creation fails and an insuccess message is displayed:"Yeahhhhh, title should be 2 to 85 characters. Yours was 86. 🤠”

---

**Test 3: Post creation with missing title**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member either does not enter a title for the post.
2. The member enters a text body with more than 20 characters or fewer than 10000 characters.
3. The member attempts to submit the post creation form.

**Expected Result:**
The post creation fails and an insuccess message is displayed:"Yeahhhhh, title should be 2 to 85 characters. Yours was 0. 🤠”

---

**Test 4: Post creation attempt with 19 character text body**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member enters a title with more than 2 characters and fewer than 85 characters.
2. The member enters a text body with 19 character.
3. The member attempts to submit the post creation form.

**Expected Result:**
The post creation fails and an insuccess message is displayed:"Yeahhhhh, text posts should be 20 to 10000 characters. Yours was 19. 🤠”

---

**Test 5: Post creation attempt with 10001 character text body**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member enters a title with more than 2 characters and fewer than 85 characters.
2. The member enters a text body with 10001 character.
3. The member attempts to submit the post creation form.

**Expected Result:**
The post creation fails and an insuccess message is displayed:"Yeahhhhh, text posts should be 20 to 10000 characters. Yours was 10001. 🤠”

---

**Test 6: Post Creation attempt with missing text body**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member enters a title with more than 2 characters or fewer than 85 characters.
2. The member attempts to submit the post creation form.

**Expected Result:**
The post creation fails and an insuccess message is displayed:"Yeahhhhh, text posts should be 20 to 10000 characters. Yours was 0. 🤠”

---

**Test 7: Post creation attempt with invalid title and text body**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member enters 1 character title.
2. The member enters a 10001 characters text body.
3. The member attempts to submit the post creation form.

**Expected Result:**
The post creation fails and an insuccess message is displayed:"Yeahhhhh, title should be 2 to 85 characters. Yours was 0. 🤠”

---

**Test 8: Post creation attempt with invalid link**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member enters a title with more than 2 characters and fewer than 85 characters.
2. The member enters a link with fewer than 8 characters.

**Expected Result:**
The post creation fails and an unsuccess message is displayed: "Yeahhhhh, 🤠"

---

**Test 9: Post creation attempt with invalid link**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member enters a title with more than 2 characters and fewer than 85 characters.
2. The member enters a link with fewer than 501 characters.

**Expected Result:**
The post creation fails and an unsuccess message is displayed: "Yeahhhhh, 🤠"

---

**Test 10: Successfully creates a post**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member enters a title with more than 2 characters and fewer than 85 characters.
2. The member enters a text body with more than 20 and fewer than 10000.

**Expected Result:**
A success message is displayed, indicating that the post was created successfully: “”Done-zo! 🤠"

---

**Test 11: Successfully creates a post with an embedded link**

**Preconditions:**

1. The member is logged in and on the post creation page.

**Test Steps:**

1. The member enters a title with more than 2 characters and fewer than 85 characters.
2. The member fills in embedded link field with: https://www.google.com
3. The member submits the post creation form.

**Expected Result:**
A success message is displayed, indicating that the post was created successfully: “”Done-zo! 🤠"
