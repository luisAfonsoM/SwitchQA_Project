# US023 - Popular posts older than five days must display their dates in red text

## 1. Acceptance tests

### Test 1: Timestamp Color Differentiation in "Popular" Section

**Preconditions:**
1. Ensure at least two posts exist in the DDD Forum.
2. The posts have varied timestamps, with one post being older than five days.

**Test Steps:**
1. Go to the main page.
2. Select the "Popular" section.
3. Check that posts created within the last five days don't display their timestamps in red.
4. Verify that posts created more than five days ago display their timestamps in red.

**Expected Outcome:**
1. Posts newer than five days should not have timestamps in red.
2. Posts older than five days should display timestamps in red.

---

## Test 2: Verify Timestamp Color for Older Popular Posts in "Recent" Section

**Preconditions:**
1. Ensure at least two posts exist in the DDD Forum.
2. The posts have varied timestamps, with one post being older than five days.
3. A post must have at least one vote to be considered popular.

**Test Steps:**
1. Visit the main page.
2. Choose the "Recent" sorting option.
3. Confirm that the timestamp of the post older than five days is not displayed in red.

**Expected Outcome:**
1. The timestamp of the popular post older than five days should not appear in red within the "Recent" section.

---

## Test 3: Timestamp Color Differentiation for Older Popular Posts in "Unpopular" Section

**Preconditions:**
1. Ensure the existence of at least two posts in the DDD Forum.
2. The posts must have varied timestamps, with one post being older than five days.
3. For a post to be considered unpopular, it must have at least one vote.

**Test Steps:**
1. Navigate to the main page.
2. Choose the "Unpopular" sorting option.
3. Confirm that the timestamp of the post older than five days is not displayed in red.

**Expected Outcome:**
1. The timestamp of the popular post older than five days should not appear in red within the "Unpopular" section.
