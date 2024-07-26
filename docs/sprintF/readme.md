# Switch-QA Project - Sprint F

## 1. Team members

The team is made up of the following dedicated students:

| Student Number | Name              |
|----------------|-------------------|
| **1222637**    | Luís Afonso Moita Barros Ferreira |
| **1222649**    | Natali dos Santos Lucas |
| **1222639**    | Nuno Miguel Madaleno de Almeida Pinto  |
| **1222642**    | Ricardo Daniel Pinto Cerqueira |
| **1222643**    | Rita Isabel Santos Castro |
| **1222013**    | Paulo Jorge Fernandes Teixeira |

## 2. Task Distribution

_During Sprint F, task assignments are laid out as below:_

| Task | Student Assigned |
|-----------------------------|-----------------------------|
| US 22 - Recent posts highlighted with a red background | Nuno |
| US 23 - Popular posts older than five days must show their dates in red text | Rita |
| US 24 - Unpopular posts with less than two days must show their dates in green text | Paulo |
| US 25 - Display color yellow on Recent Posts Filter | Ricardo |
| US 26 - Display colored text for uncommented posts on popular filter | Luís |
| US 27 - Popular posts highlighted with a green background | Natali |
| Performance Pipeline - Jmeter Automation | Ricardo |
| Postman e functional pipeline | Paulo and Luís |
| Stryker | Paulo and Luís |

## 3. Sprint F Overview

### 3.1 Sprint F:

**Project:** DDD Forum ISEP - Group 2

**Sprint F Goals:**

- Develop new features by using BDD and TDD approach
    - You should provide clear evidence on the Git commit message about which Software Development Phase the commit is being worked by appending the phase to the beginning of the commit message e.g.:
        - [Analysis]
        - [Design]
        - [Test]
        - [Development]
        - [Deployment]

- Automate the generation of throughput/capacity reports from your application
    - Provide a Test Scenario where there are at least 25 posts with at least 3 comments each
    - Use JMeter to execute a set of tests that:
        - perform a login on the application
        - requests the popular posts
        - requests the recent posts
        - requests the unpopular posts
        - Executes all the statistical operations
        - Assertions
            - Assert that the results for each statistic operation is correct
            - Assert that the colors for the background, date and new text are correct.
    - This set of tests should be run for 10, 50, 100 and 200 simultaneous users
        - Furthermore, you should increase the number of users to specify above which number of users the statistics results fall below 75% when running with 10 users
    - Each set of tests should be run at least 3 times