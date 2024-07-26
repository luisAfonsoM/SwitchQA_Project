# US 028 - Select member avatar

## 2. Tests

### Test 1: Verify Avatar Selection Options

**Preconditions:**

1. Member is logged in.
2. Member has access to their profile page.

**Test Steps:**

1. Navigate to the member's profile page.
2. Observe the available avatar selection options.

**Expected Result:**

- There should be a variety of avatar choices, including pre-defined icons and the ability to upload a custom image.

### Test 2: Verify Avatar Change Functionality

**Preconditions:**

1. Member is logged in.
2. Member has access to their profile page.

**Test Steps:**

1. Click on the current avatar displayed in the member's profile.
2. Select a different avatar from the available options.
3. Save the changes.

**Expected Result:**

- Upon selecting and saving a new avatar, the profile page should immediately display the newly chosen avatar without requiring a page refresh.

### Test 3: Verify Saved Avatar Persistence

**Preconditions:**

1. Member is logged in.
2. Member has selected and saved a custom avatar.

**Test Steps:**

1. Log out of the member's account.
2. Log back in and navigate to the profile page.

**Expected Result:**

- After logging back in, the profile page should display the previously chosen avatar, maintaining the selected avatar's persistence.

### Test 4: Verify Avatar Hover Message

**Preconditions:**

1. Member is logged in.
2. Member hovers over the avatar displayed in their profile.

**Test Steps:**

1. Hover the mouse cursor over the avatar.

**Expected Result:**

- When the avatar is hovered over, a tooltip-like message "Change me" should appear indicating the ability to modify the avatar.

