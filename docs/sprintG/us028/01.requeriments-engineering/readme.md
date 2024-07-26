# US 028 - Select member avatar

## 1. Requirements Engineering
 
### 1.1. User Story Description
 
The member profile should include the avatar of the member as well as his/her nickname. The avatar can be a pre-defined icon or an image selected/loaded by the member.

### 1.2. Customer Specifications and Clarifications

_As a member, I want to see the posts with more comments highlighted with a green background._

### 1.3. Acceptance Criteria
 
**AC1:** The member must be logged in.

**AC2:** The member must have access to their profile.

**AC3:** When the page is refreshed, the last chosen avatar is saved and displayed on the member's profile.


### 1.4. Found out Dependencies

_There is a dependency on "US011 - Login" since the member should be logged in to access their profile._
_There is a dependency on "US010 - View member's profiles" since the member avatar is seen there._

### 1.5 Input and Output Data
 
**Input data**

- Click on the avatar.

**Output data**
 
- Avatar changes on click.

### 1.6. System Sequence Diagram (SSD)
 
#### Alternative One

// TODO: Diagram showing the sequence of events for changing the avatar

### 1.7 Other Relevant Remarks
 
The current implementation of this user story partially fulfills the intended functionality. At present, the feature operates solely on the front end, allowing users to select and save their avatar locally. However, the backend logic necessary to retrieve avatars from a new table containing these images has not been developed. Consequently, the functionality is limited to the frontend, restricting the avatar selection and display to local storage.

To resolve this issue and fully enable the functionality outlined in the user story, the development of backend logic is crucial. This backend logic would facilitate the retrieval of avatars from the dedicated table, ensuring that members can select and display their chosen avatars effectively within their profiles.

### 1.8 Bugs

None.