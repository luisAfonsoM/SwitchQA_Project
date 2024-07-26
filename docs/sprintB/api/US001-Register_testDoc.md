# **API Test Documentation**

## **Test Name:**

[US001-ssd.api.test](/src/api_test/US001/US001-ssd.api.test.ts)

**Description:** These tests verify the functionality of **Registering a new Account** based on the acceptance criteria defined in [US001](/docs//sprintA/us001/01.requirements-engineering/readme.md).

&nbsp;&nbsp;&nbsp;&nbsp;

**Endpoints Used:**

- `POST /users` - Create a user

**Test Setup:**

- Initialize the required objects: regBody.

**Test Setup:**

1. Fill the regBody object in `/users` endpoint with different a unique email, username, and password, using the following request body:

```json
{
  "email": "{{email}}",
  "username": "{{username}}",
  "password": "{{password}}"
}
```

**Post Conditions:**

- Status code is 200;
- statusText is Ok.

**Test Execution:**

- Execute the test using Jest;
- Monitor the test execution and check for any failures or errors;
- Review the test results and look into any failures.
