Feature: US016 -  View average of posts by day

 Scenario: View statistics page

        Given I am a logged-in member
        When I navigate to the statistics page
        Then I should see the following elements on the page:
        - A label with the text "Average of posts on a Specific Date"
        - A text field to input a date
        - A submit button
        - A refresh button

 Scenario: Get average of posts for a specific day

        Given I am a logged-in member on the statistics page
        When I enter a valid date in the format "YYYY-MM-DD" and submit the form
        Then the average number of posts per member for that day should be displayed

 Scenario: Get average of posts for a day without posts

        Given I am a logged-in member on the statistics page
        When I enter a valid date in the format "YYYY-MM-DD" and submit the form
        And there are no posts for the selected date
        Then the message "No data found" should be displayed in the "Result" field

 Scenario: Get average of posts for an invalid date

        Given I am a logged-in member on the statistics page
        When I enter an invalid date and submit the form
        Then the message "Inserted date is not valid, please refresh and try again 😎" should be displayed

 Scenario: Refresh statistics button

        Given I am a logged-in member on the statistics page
        And I enter a valid date in the format "YYYY-MM-DD" and submit the form
        And the average number of posts per member is displayed
        When I click the refresh button
        Then the statistics data should be reset