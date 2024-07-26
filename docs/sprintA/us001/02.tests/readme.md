# US 001 - Register a new account

# 1. Tests

## Test 1: All fields are correctly filled during registration

**Preconditions:**

1. A visitor is on the registration page.

**Test Steps:**

1. The visitor enters a valid email "toZe@toZe.pt".
2. The visitor enters a username with two characters "AB".
3. The visitor enters a password with six characters "passwo"
4. The visitor submits the registration form.

**Expected Result:**
A success message is displayed, indicating that the registration was successful "You're all signed up! Logging you in. 🤠" followed by another separate message "Logged in! 🤠".

---

## Test 2: Visitor attempts to register without e-mail

**Preconditions:**

1. A visitor is on the registration page.

**Test Steps:**

1. The visitor enters valid username "AB" and password "passwo".
2. The visitor attempts to submit the registration form.

**Expected Result:**
The registration fails and an unsuccess message is displayed indicating that user must use a valid e-mail "Yeahhhhh, Want to try that again with a valid email? 🤠".

---

## Test 3: Visitor attempts to register without username

**Preconditions:**

1. A visitor is on the registration page.

**Test Steps:**

1. The visitor enters a valid e-mail "toZe@toZe.pt" and password "passwo" .
2. The visitor attempts to submit the registration form.

**Expected Result:**
The registration fails and an unsuccess message is displayed indicating that user must use a valid username "Yeahhhhh, TypeError: Cannot read property 'toString' of undefined 🤠".

---

## Test 4: Visitor attempts to register without password

**Preconditions:**

1. A visitor is on the registration page.

**Test Steps:**

1. The visitor enters a valid e-mail "toZe@toZe.pt" and username "AB".
2. The visitor attempts to submit the registration form.

**Expected Result:**
The registration fails and an unsuccess message is displayed indicating that user must use a valid password "Yeahhhhh, your password should be at least 6 chars 🤠".

---

## Test 5: Username has less than two characters during registration

**Preconditions:**

1. A visitor is on the registration page.

**Test Steps:**

1. The visitor enters a username with less than two characters "A".
2. The visitor attempts to submit the registration form.

**Expected Result:**
The post is not accepted, and an error message is displayed indicating that the username must be at least two characters long "Yeahhhhh, TypeError: Cannot read property 'toString' of undefined 🤠".

---

## Test 6: Password has less than six characters during registration

**Preconditions:**

1. A visitor is on the registration page.

**Test Steps:**

1. The visitor enters a password with less than six characters "pass".
2. The visitor attempts to submit the registration form.

**Expected Result:**
The post is not accepted, and an error message is displayed indicating that the password must be at least six characters long "Yeahhhhh, your password should be at least 6 chars 🤠".

---

## Test 7: Username is not unique during registration

**Preconditions:**

1. A visitor is on the registration page.
2. The username the visitor wants to use is already taken.
3. A username "AB" already exists.

**Test Steps:**

1. The visitor enters the taken username "AB".
2. The visitor attempts to submit the registration form.

**Expected Result:**
The post is not accepted, and an unsuccess message is displayed indicating that the username is not available "Yeahhhhh, The username _username_ was already taken 🤠".

---

## Test 8: Visitor attempts to register with already taken e-mail

**Preconditions:**

1. A visitor is on the registration page.
2. The e-mail the visitor wants to use is already taken.
3. The email "toZe@toZe.pt" is already registered.

**Test Steps:**

1. The visitor enters an already taken e-mail address "toZe@toZe.pt".
2. The visitor enters valid password "passwo" and username "AB".
3. The visitor attempts to submit the registration form.

**Expected Result:**
The post is not accepted, and an error message is displayed indicating that the email address is not valid "Yeahhhh, The email _email_ associated for this account already exists 🤠".

---

## Test 9: Visitor attempts to register with invalid e-mail

**Preconditions:**

1. A visitor is on the registration page.

**Test Steps:**

1. The visitor enters an e-mail without top-level domain ""toZe.pt".
2. The visitor enters valid password "passwo" and username "AB".
3. The visitor attempts to submit the registration form.

**Expected Result:**
The post is not accepted, and an error message is displayed indicating that the email address is not valid "Yeahhhhh, Want to try that again with a valid email? 🤠".
