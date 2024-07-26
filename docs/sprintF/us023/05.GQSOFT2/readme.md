## 2. GQSOFT Assignment

The black-box chosen testing technique was equivalence partitioning (classes de equivalência). This testing technique divides input data into partitions or classes to create test cases that cover different behaviors or outcomes for each partition.

### Application in US023 Scenarios:

1. Valid Class (Posts older than five days):
   - **Scenario:** "Older than five days posts in 'Popular' display red timestamps."
   - **Validation:** `expect(timestampColor).toBe(color);`
   - **Explanation:** Here, we're verifying that timestamps for posts older than five days are displayed in red. This represents the valid class where the system should behave a certain way (timestamp in red).

2. Invalid Class (Posts less than five days or newer):
   - **Scenario:** "Older than five days posts in 'New' don't display red timestamps."
   - **Validation:** `expect(timestampColor).not.toBe(color);`
   - **Explanation:** Here we're ensuring that timestamps for posts less than five days or newer are not displayed in red. This represents the invalid class where the system should behave differently from the valid class (timestamp not in red).

### How it's being used:

1. Separation of Behavior: US023 scenarios test two distinct behaviors based on post age - the display of timestamps in red or not in red.

2. Validation against Different Classes: Each scenario tests a specific class (older than five days vs. less than five days) to ensure the system behaves correctly within these classes.

3. Coverage of Expected Behaviors: By covering both valid and invalid classes, we're ensuring that the application behaves as expected for each class of input (post age) as per the requirements.

