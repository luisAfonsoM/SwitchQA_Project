# US 026 - Highlight Posts Without Comments

## 1. Requirements Engineering

### 1.1. User Story Description
- As a member, when I look at the popular posts, posts that have no comments should display a purple text stating “Please comment me”. This text should link to the comment posting page for that specific post.

### 1.2. Customer Specifications and Clarifications
- Is this functionality only available to members?

### 1.3. Acceptance Criteria
- **AC1:** Posts without any comments are highlighted with purple text stating “Please comment me”.
- **AC2:** This text is a hyperlink that leads to the comment posting page for that specific post.
- **AC3:** If the post receives a comment, the text and highlight must disappear.

### 1.4. Found Dependencies
- _There is a dependency to "US002 - Create a post", since one or more posts must already exists._
- _There is a dependency to "US003 - View posts and their data", since posts must be visible to both Visitor and Member._
- _There is a dependency to "US004 - Write a comment on a post", since a comment must be created._
- _There is a dependency to "US009 - Sort posts by Popular or New", since the posts must be sorted by Popular._

### 1.5. Input and Output Data
**Input Data:**
- Member’s view request for popular posts.

**Output Data:**
- Display of popular posts with specific highlighting for posts without comments.

### 1.6. System Sequence Diagram (SSD)
#### [To be developed]

### 1.7. Other Relevant Remarks
- Consider accessibility guidelines for color contrast and text for visually impaired users.

### 1.8. Bugs
- No known bugs at this stage.
