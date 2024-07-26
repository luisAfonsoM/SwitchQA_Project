# Sprint Report: 

## Group 1

### General review

- In reference to the documentation, it has come to our attention that US03 purportedly has 20 Acceptance Criteria (ACs), which appears to be an unusually high number.

- Upon executing the "npm run test:api" command, as indicated in the "README.md" file, we have observed intermittent test failures. Notably, inconsistencies arise, but the tests related to US07, US09, and US016 appear to be consistently problematic.

- We have noted the absence of any references to Stryker in the repository, and the lack of pertinent files such as "stryker.conf.json." Given that the project operates on Node 12, we presume that Stryker has not been utilized. However since the group presented a Stryker report during the last sprint we cannot verify it's existence/accuracy. 

- Our scrutiny of the JMeter documentation revealed claims of script automation through the utilization of a "jmeterAutomation.js" file. Regrettably, the absence of a corresponding command in the "package.json" file prevents the execution of this script. Furthermore, it has been identified that running the script would be unfeasible without local execution by the user "Asus," given specific variables and paths outlined in the documentation:
```javascript 
var path_to_jmeter_test_plan = 'C:/Users/Asus/Desktop/jmeter_projects/ThreadGroupScenario1.jmx';
var path_to_jmeter_reports = 'C:/Users/Asus/Desktop/jmeter_reports';
var path_to_jmeter = 'C:/Users/Asus/Desktop/apache-jmeter-5.6.2/bin/jmeter.bat';
```
### Other remarks: 

- We encountered challenges during the execution of the acceptance tests, and we were unable to ascertain the underlying cause of the issue. Therefore we cannot provide any feedback. 

## Group 3

### Sprint 4:

1. **Delete** 
- In the database, users are flagged as 'is_deleted' and consequently unable to log in again. Even after a member is deleted, their profile remains accessible. The deletion prompt lacks clarity and should be revised to something like: 'This user has been deleted.'"

### Sprint 5:

1. **As a member, when I look at the recent posts, I want posts that have less than 1/3 of the comments from the post with the highest comments on the webpage to be highlighted with a red background.**
- Following a client clarification, the group amended the criteria to include posts with an equal or lesser number of comments.

2. **As a member, when I look at the popular posts, I want posts that have more than 2/3 of the comments from the post with the highest comments on the webpage to be highlighted with a green background.**
- The group isn’t following this criteria and is instead using an equal or more than rule. Additionally, the acceptance criteria within the requirements engineering are not properly explained. Without context, it could lead to the misconception that only one posts should be highlighted.

3. **As a member, when I look at the unpopular posts, post that have more than 1/3 and less than 2/3 of the comments from the post with the highest comments on the webpage to be highlighted with a yellow background.** 
- The threshold values aren’t met since the frontier values aren’t respected.

4. **As a Member, I wish to know the top 3 members that published more comments for a specific day**
- Functionality not implemented.


5. **As a Member, I wish to know the percentage of posts without any comment for a specific day** 
- This isn't being calculated based on the specific date, as requested in the user story. Instead, it's calculating an average considering all the posts created up until the selected date.


### Other remarks: 
-  Upon selecting a date in any of the statistics fields, all the other fields are either bugged or blocked with a 'Loading' message."

- There is a ghost user (admin user) who, according to any member's profile, has the most comments (4). We've verified that this user isn't created in the database. Even if a specific member has more than 4 comments, the admin user still appears as the top commenting member. We've concluded that it's static HTML information within the member.tsx file.

---

## Group 4

### Sprint 4:

1. **Delete** 
- The deletion action redirects the user from the page but doesn't verify if the user has posts/comments. Additionally, it doesn't entirely remove the user, as login remains possible.

### Sprint 5:

1. **As a Member, I wish to know the average of comments for a specific day.**
   - The comment average divides the total comments for the day by the total users in the database.
   
2. **As a Member, I wish to know the average of posts for a specific day.**
   - The post average divides the total posts for the day by the total users in the database.

3. **As a Member, I wish to know the percentage of posts without any comment for a specific day.**
   - The post comment percentage calculation is not aligned with the expected values. For instance, on a day with two posts, one with a comment and one without, it should return 50% but returns 91.13%.
   

### Sprint 6:

1. **As a member, when I look at the unpopular posts, post that have more than 1/3 and less than 2/3 of the comments from the post with the highest comments on the webpage to be highlighted with a yellow background.**
  - Functionality not implemented.

2. **As a member, when I look at the popular, posts with more than five days should have the date in red text.**
  - Functionality not implemented.

---

## Group 5

### Sprint 4:

1. **Delete** 
- Functionality not implemented.

### Sprint 5

1. **As a Member, I wish to know the average of comments for a specific day**
   - It's working as expected, but the response uses a math function that truncates numbers to integers (`math.trunc`), which isn't a common procedure in calculating an average. 
   
---

