# US 028 - Select member avatar

  Scenario: Verify Avatar Selection Options
    Given the logged-in member has profile access
    When they navigate to their profile page
    Then they should see various avatar options
  
  Scenario: Verify Avatar Change Functionality
    Given the logged-in member has access to their profile
    When they click on their current avatar and select a new one
    Then the profile page should instantly display the new avatar
  
  Scenario: Verify Saved Avatar Persistence
    Given the logged-in member has previously saved a custom avatar
    When they log out and log back in
    Then the profile should display the previously chosen avatar
 
 TODO: add to github pages