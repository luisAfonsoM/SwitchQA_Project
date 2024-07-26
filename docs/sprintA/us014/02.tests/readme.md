# US014 - Sort posts by Unpopular

## 1. Tests

**Test 1: Visitor sorts posts by "Unpopular".**

**Preconditions:**

1. At least three posts exists in DDD Forum.
2. Posts must have different scores.

**Test Steps:**

1. Navigate to the main page.
2. Select "Unpopular" sorting option.

**Expected Result:**

1. Posts must be ordered by its post score, lowest score first.

---

**Test 2: Check that Popular, New and Unpopular sort options alternates between each other correctly.**

**Preconditions:**

1. At least two posts exists in DDD Forum.
2. Posts must have different timestamps.
3. Posts must have different scores.

**Test Steps:**

1. Navigate to the main page.
2. Verify that the popular posts list is displayed.
3. Select the "New" sorting option.
4. Select the "Popular" sorting option.
5. Select the "Unpopular" sorting option.

**Expected Result:**

1. The order of the displayed posts must change according to the selected option by the Visitor.
