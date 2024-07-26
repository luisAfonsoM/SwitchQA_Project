# US 011 - Login

# 1. Tests

## Test 1: Incorrect username

**Preconditions:**
1. A registered account must exist for the member.

**Test Steps:**
1. The member fills in the username incorrectly.
2. The member fills in the password correctly.

**Expected Result:**
Login attempt fails.
A notification is displayed indicating that the username entered is incorrect:
"Had some trouble logging in! TypeError: Cannot read property 'toString' of undefined 🤠'


## Test 2: Incorrect password

**Preconditions:**
1. A registered account must exist for the member.

**Test Steps:**
1. The member fills in the username correctly.
2. The member fills in the password incorrectly.

**Expected Result:**
Login attempt fails.
A notification is displayed indicating that the password entered is incorrect:
"Had some trouble logging in! TypeError: Cannot read property 'toString' of undefined 🤠'

## Test 3: Incorrect password and username

**Preconditions:**
1. A registered account must exist for the member.

**Test Steps:**
1. The member fills in the username incorrectly.
2. The member fills in the password incorrectly.

**Expected Result:**
Login attempt fails.
A notification is displayed indicating that the password entered is incorrect:
"Had some trouble logging in! TypeError: Cannot read property 'toString' of undefined 🤠'

## Test 4: Correct username and password

**Preconditions:**
1. A registered account must exist for the member.

**Test Steps:**
1. The member attempts to log in and fills in username and password correctly.

**Expected Result:**
Login is accepted.
A success message is displayed, indicating that the login was successful.

## Test 5: Correct username and blank password

**Preconditions:**
1. A registered account must exist for the member.

**Test Steps:**
1. The member fills in the username correctly.
2. The member does not write the password.

**Expected Result:**
Login attempt fails.
A notification is displayed indicating that the password entered is incorrect:
"Yeahhhh, you forgot to include your password 🤠'