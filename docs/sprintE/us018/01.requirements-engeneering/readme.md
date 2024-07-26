# US 018 - View top 3 Commenting Members for a Specific Day

## 1. Requirements Engineering

### 1.1. User Story Description

As a Member,
I want to view the top 3 members who have posted the most comments on a specific day,
so that I can identify the most active contributors for that day.

### 1.2. Customer Specifications and Clarifications

- The specific day for which comments are counted should be selectable.
- In case of a tie in the number of comments, members should be ordered based on their usernames alphabetically.
- If no comments were made on the selected day, the system should provide an appropriate message.


### 1.3. Acceptance Criteria

- **AC1:** The Member must be able to access to the DDD Forum.
- **AC2:** The Member must be able to access statistics page.
- **AC3:** A label "The top 3 members that published more comments on a Specific Date" should exist.
- **AC4:** The Member can input a specific day for comment counting.
- **AC5:** The imput date should follow the format of "YYYY-MM-DD".
- **AC6:** A submit button to request the top three commenting members should exist.
- **AC7:** A refresh button to clean the input text data and respective result.
- **AC8:** The system displays the top 3 members with the highest comment counts for the selected day.
- **AC9:** Members with the same number of comments are ordered alphabetically.
- **AC10:** If no records available, the result shoud be "There isn't a top three for this date".
- **AC11:** When the entered date in invalid the following flash message appears "Inserted date is not valid, please refresh and try again 😎"


### 1.4. Found Dependencies

- _There is a dependency to "US011 - Login",since the user must be logged in to access the statistics functionalities._

- _There is a dependency to "US004 - Write a comment on a post",  since the functionality's purpose is to display the top three commenters._


### 1.5 Input and Output Data

Input Data:
Selected day for comment counting.

Output Data:
The usernames of the top 3 commenting members.


### 1.6. System Sequence Diagram (SSD)

[System Sequence Diagram](../01.requirements-engeneering/svg/us018-ssd-alternative-1.svg)

### 1.7 Other Relevant Remarks

None

### 1.8 Bugs

None


