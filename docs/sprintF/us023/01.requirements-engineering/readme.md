# US023 - Popular posts older than five days must show their dates in red text.

## 1. Requirements Engineering

### 1.1. User Story Description

- As a member, when I look at the popular posts, those older than five days should have the date displayed in red text.

### 1.2. Customer Specifications and Clarifications

1. Is this functionality only available to members?

### 1.3. Acceptance Criteria

**AC1:** User must be able to access to the DDD Forum.

**AC2:** User can sort posts by popular.

**AC3:** Posts older than five days should display their creation dates in red text.

### 1.4. Found out Dependencies

- _There is a dependency to "US002 - Create a post", since one or more posts must already exists._

- _There is a dependency to "US003 - View posts and their data", since posts must be visible to both Visitor and Member._

- _There is a dependency to "US007 - Vote on a post", since the posts must be displayed by score when sorted by popular._

- _There is a dependency to "US009 - Sort posts by Popular or New", since the posts must be sorted by Popular._


### 1.5 Input and Output Data

**Input Data:**

- Posts featured within the 'Popular' section.
- Post creation dates.

**Output Data:**

- Displayed post creation dates in red text if they are older than five days.

### 1.6. System Sequence Diagram (SSD)

#### Alternative One

![SSD - Alternative One](svg/)

### 1.7 Other Relevant Remarks

n/a

### 1.8 Bugs

n/a
