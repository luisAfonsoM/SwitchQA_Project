# US 023 - Unpopular posts with less than two days should have the date in green text.

## 1. Requirements Engineering

### 1.1. User Story Description

- As a member, when I look at the unpopular posts, posts with less than two days should have the date in green text.

### 1.2. Customer Specifications and Clarifications

1. Is this functionality only available to members?


### 1.3. Acceptance Criteria

**AC1:** Unpopular posts with less than two days must have its timestamp in green.
**AC2:** Posts from other sorting types with less than two days should not have its timestamp in green.
**AC3:** Unpopular posts with more than two days should not have its timestamp in green. 
**AC4:** The green text should be applied consistently to all posts that were created less than two days ago.

### 1.4. Found out Dependencies

- _There is a dependency to "US002 - Create a post", since one or more posts must already exists._

- _There is a dependency to "US003 - View posts and their data", since posts must be visible to both Visitor and Member._

- _There is a dependency to "US007 - Vote on a post", since the posts must be displayed by score when sorted by its unpopularity._

- _There is a dependency to "US009 - Sort posts by Popular or New", since the posts must be sorted by Unpopular._


### 1.5 Input and Output Data

**Input Data:**

- Unpopular label

**Output Data:**

- Unpopular posts with less than two days with green timestamp

### 1.6. System Sequence Diagram (SSD)

#### Alternative One

![Alternative 1: SSD](docs/sprintF/us024/01.requirements-engineering/puml/us024-ssd-alternative-1.puml)

### 1.7 Other Relevant Remarks

n/a

### 1.8 Bugs

n/a
