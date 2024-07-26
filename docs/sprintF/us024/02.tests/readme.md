# US24 - Timestamp Display for Unpopular Posts

## 1. Tests

### Test 1: Verify timestamp in green for unpopular posts with less than two days.

#### Preconditions:

1. At least one unpopular post with a creation date less than two days exists in DDD Forum.

#### Test Steps:

1. Navigate to the main page.
2. Identify and click on an unpopular post with less than two days of creation.
3. Verify that the timestamp of the post is displayed in green.

#### Expected Result:

- The timestamp of the selected unpopular post with less than two days should be displayed in green.

---

### Test 2: Ensure timestamp is not in green for unpopular posts with more than two days.

#### Preconditions:

1. At least one unpopular post with a creation date more than two days exists in DDD Forum.

#### Test Steps:

1. Navigate to the main page.
2. Identify and click on an unpopular post with more than two days of creation.
3. Verify that the timestamp of the post is not displayed in green.

#### Expected Result:

- The timestamp of the selected unpopular post with more than two days should not be displayed in green.

---

### Test 3: Ensure timestamp is not in green for posts from other sorting types with less than two days.

#### Preconditions:

1. At least one post with a sorting type other than "Unpopular" and a creation date less than two days exists in DDD Forum.

#### Test Steps:

1. Navigate to the main page.
2. Identify and click on a post with a sorting type other than "Unpopular" and less than two days of creation.
3. Verify that the timestamp of the post is not displayed in green.

#### Expected Result:

- The timestamp of the selected post from another sorting type with less than two days should not be displayed in green.

---

### Test 4: Consistent application of green text for unpopular posts created less than two days ago.

#### Preconditions:

1. At least two unpopular posts with a creation date less than two days exist in DDD Forum.

#### Test Steps:

1. Navigate to the main page.
2. Identify and click on multiple unpopular posts with less than two days of creation.
3. Verify that the timestamp of each selected unpopular post is consistently displayed in green.

#### Expected Result:

- The timestamp of all selected unpopular posts with less than two days should be consistently displayed in green.
