### User Story: US018 - View Top 3 Members by Comments for a Specific Day

#### Test 1: Member views top 3 members with the most comments for a specific day.

**Preconditions:**

1. The Member is logged into the DDD Forum.
2. At least three members have posted comments on the selected day.

**Test Steps:**

1. Navigate to the statistics page.
2. Select a specific day for comment counting.
3. Verify that the system displays the top 3 members with the highest comment counts for the selected day.

**Expected Result:**

1. The system should correctly display the top 3 members with the highest comment counts for the selected day.

---

#### Test 2: Member views top 3 members for a day with tied comment counts.

**Preconditions:**

1. The Member is logged into the DDD Forum.
2. At least three members have the same number of comments on the selected day.

**Test Steps:**

1. Navigate to the statistics page.
2. Select a specific day for comment counting.
3. Verify that the system orders members alphabetically if there is a tie in the number of comments.

**Expected Result:**

1. Members with the same number of comments should be ordered alphabetically.

---

#### Test 3: Member views message when no comments were made on the selected day.

**Preconditions:**

1. The Member is logged into the DDD Forum.
2. No comments were made on the selected day.

**Test Steps:**

1. Navigate to the statistics page.
2. Select a specific day for comment counting with no comments.

**Expected Result:**

1. The system should display should return null.

---

#### Test 4: Member views message when there aren't enough members commenting on the selected day.

**Preconditions:**

1. The Member is logged into the DDD Forum.
2. Less than three members have posted comments on the selected day.

**Test Steps:**

1. Navigate to the statistics page.
2. Select a specific day for comment counting with insufficient members.

**Expected Result:**

1. The system should display should return null.
