## 3.1 User Story 013 - Delete User
As a user, I want to delete my profile.
* [User Story 13](../../us013/01.requirements-engineering/readme.md)
* [Tests](../../us013/02.tests/readme.md)


## 3.2 Implementation

### Backend implementation

#### UseCase functions
![hasPosts](./images/hasPostsByMemberId-function.png)
![hasComments](./images/hasCommentsByMemberId-function.png)

#### ErrorHandling

![ErrorConflict409](./images/userHasContentError.png)

#### Endpoint
![Endpoint](./images/deleteEndpoint.png)

### Frontend implementation

#### Handling API Response

![APIResponseCatch](./images/userService-delete-function.png)

#### ActionsCreators & actions & states

![actionsCreators](./images/actionCreators.png)
![actions](./images/actions.png)
![states](./images/states.png)

#### Redux Operators

![reduxOperatorFunction](./images/deleteUserAbstraction.png)

#### MemberPage

![handleDeleteUser](./images/memberPage-1.png)
![handleDeleteUser](./images/memberPage-2.png)
![handleDeleteUser](./images/memberPage-3.png)

#### HOC

![HOC](./images/HOC.png)

![]()

## 3.3 Tests
### Backend Tests
#### Happy path
![Delete User Happy Path](./images/api-test-happy.png)

#### Happy path with post/comment error
![Delete User w/ Content Error](./images/api-test-409.png)

### UI Test
#### User deleted successfully
![Delete User Happy Path](./images/ui-test-happy.png)
![Delete User Happy Path2](./images/ui-test-happy2.png)

#### User delete error
![Delete User w/ Content Error](./images/ui-test-409.png)

#### Deleted user tries to login
![Login Error](./images/ui-test-login.png)