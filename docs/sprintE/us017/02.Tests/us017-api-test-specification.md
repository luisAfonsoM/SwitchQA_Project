# **Test Name:** US017 - Get Post with more comments on a specific date

[US017.api.test.ts](/src/api_test/US017/US017.api.test.ts)

**Description:** This test suite verifies the functionality of retrieving post statistics with the most comments on a specific date. The test scenarios are based on the acceptance criteria defined in US017.

**Endpoints Used:**
- `GET /statistics/:date` -Retrieve post statistics by date

**Test Setup:**
1. Initialize the required objects: Users, accessToken, and regBody.
2. Bootstrap necessary data to the database using the bootstrap module.

**Test Execution:**

### **Positive Scenario: Checkin Endpoint Status**

#### **Test Case: 1.1**
- Execute the test using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and ensure that the status code is 200.

### **Retrieve Post with More Comments on a Specific Date**

#### **Test Case: 1.2**
- Execute the test using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and ensure that the retrieved post title with the most comments on the specified date is 'Dream TeSTer'.

#### **Test Case: 1.3**
- Execute the test using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and ensure that the retrieved post title with the most comments on a different date (2023-06-27) is null.

#### **Test Case: 1.4**
- Execute the test using Jest.
- Monitor the test execution and check for any failures or errors.
- Review the test results and ensure that the status code is 500 when the date is '1231'.

**Post Conditions:**
- Status code is 200 (for positive scenarios).
- Status code is 500 (for scenarios with invalid input or server errors).
- The retrieved post title with the most comments matches the expected result or is null based on the test scenario.

**Test Teardown:**
- Delete the database records created during test setup using the bootstrap module.
