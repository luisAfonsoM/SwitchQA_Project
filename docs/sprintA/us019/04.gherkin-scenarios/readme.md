Feature: Members without activity (Posts and comments)
 
Scenario: Test 1 - At least one user should not post or comment
    Given a member is logged into DDD Forum
    When the member inserts a day to filter all the members without activity
    And the member submits the request
    Then the system validates the request
    And the system displays the usernames that didn't interact in any way on the screen
 
  Scenario: Get a date where all the users did at least one action
    Given a member is logged into DDD Forum
    When the member inserts a day to filter all the members without activity
    And the member submits the request
    Then the system validates the request
    And the system displays "No results" on the screen
 
  Scenario: Test 3 - Get a date in an invalid format
    Given a member is logged into DDD Forum
    When the member inputs the wrong date format
    And the member submits the request
    Then the system validates the request
    And the system displays an error message: "Invalid date format. Please use YYYY/MM/DD"