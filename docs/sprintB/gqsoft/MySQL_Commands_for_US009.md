# SQL Commands for Data Insertion - US009 - Sort Posts by Popular or New

## To configure environment follow the link bellow:

[Enviromentconfig](./readme.md)

## MySQL Data Insertion

1. Insert a new member into the`base_user` table:

    **To insert data into the tables acess the folder: [sprintB/gqsoft/sql_files/US009_insert_data.sql](/docs/sprintB/gqsoft/sql_files/US009_insert_data.sql)**

    - Execute the SQL query command to insert the member and its details: 
    
    ```sql
    INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("0e9d4aea-3542-4032-88f9-813619017fae", "luisafonso@dddforum.com", "LuísAfonso", "$2a$12$lNPmuH//UkzRTFTIBi/Ybu5YRYAuKnO36jtEtGiSdoGx7Gmu5g8ju", "2023-06-26 11:00:00", "2023-06-26 11:00:00");
    INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("1771eddd-a493-407c-b75a-491e0407087f", "natalilucas@dddforum.com", "NataliLucas", "$2a$12$YDqWZjeFaTp5f1xCAww.CeQ1lEm0gi46O28OjWZU5vg71Rl.RT2La", "2023-06-27 11:00:00", "2023-06-27 11:00:00");
    INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("4370b417-413e-4915-baa5-495f3b9e3d5f", "nunopinto@dddforum.com", "NunoPinto", "$2a$12$wUHyIEjMkAb1PsqdRaFv0u7x9/rh99rOz.Kr6We9LRLMpICdXVfVa", "2023-06-28 11:00:00", "2023-06-28 11:00:00");
    INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("86412d32-3688-474b-bfcc-54b65ceca860", "ricardocerqueira@dddforum.com", "RicardoCerqueir", "$2a$12$71tWDLZoO5zs9i465bXWMu8CfyBmNStdwXh.HorWjRe5.LkaV59SW", "2023-06-29 11:00:00", "2023-06-29 11:00:00");
    INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("575a8c2e-29aa-4b80-95e5-c86d14b62fb9", "ritacastro@dddforum.com", "RitaCastro", "$2a$12$1jEeogE4fQPi46CSVl0nEeJ.Xm6d3w8g0q8eWTFU.LIeHe9igRc1a", "2023-06-30 11:00:00", "2023-06-30 11:00:00");
    INSERT INTO base_user (base_user_id, user_email, username, user_password, created_at, updated_at) VALUES ("709d1165-f57a-4fc7-9b64-d1abf342f1a2", "pauloteixeira@dddforum.com", "PauloTeixeira", "$2a$12$Dx.PoHBusG40YJKdyz85W.zZ/XMZMe1pSxdYkXeb2Cyrsy1VaFZSS", "2023-07-01 11:00:00", "2023-07-01 11:00:00");

    ```

    - Those commands creates 6 different members with email, username and passwords encrypted with the Hash generator and different timestamps between users creation. 

2. Verify the created member

   - To check if the member was successfully inserted, execute the following SQL query:

     ```sql
     SELECT * FROM base_user;
     ```

   - This query retrieves all members from the `base_user` table, allowing you to verify the created member's details.

3. Add an ID to the `member`:

    - Execute the SQL query command to insert the member id and time of creation:

    ```sql
    INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "0e9d4aea-3542-4032-88f9-813619017fae", 0, "2023-06-26 11:00:00", "2023-06-26 11:00:00");
    INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("a6e313e9-2797-434a-a3d6-c8e2e81eeac2", "1771eddd-a493-407c-b75a-491e0407087f", 0, "2023-06-27 11:00:00", "2023-06-27 11:00:00");
    INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "4370b417-413e-4915-baa5-495f3b9e3d5f", 0, "2023-06-28 11:00:00", "2023-06-28 11:00:00");
    INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("73621c4d-139e-45cb-b3ea-52433283ec5a", "86412d32-3688-474b-bfcc-54b65ceca860", 0, "2023-06-29 11:00:00", "2023-06-29 11:00:00");
    INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("1a67501a-4f06-4b25-b2aa-6c100fe26cf7", "575a8c2e-29aa-4b80-95e5-c86d14b62fb9", 0, "2023-06-30 11:00:00", "2023-06-30 11:00:00");
    INSERT INTO member (member_id, member_base_id, reputation, created_at, updated_at) VALUES ("3ded78b6-094e-401c-bf10-df10ee51accf", "709d1165-f57a-4fc7-9b64-d1abf342f1a2", 0, "2023-07-01 11:00:00", "2023-07-01 11:00:00");
    ```
    - This command creates members id encrypted with UUID generator.

4. Verify the data from member

   - To check if the member id was successfully inserted, execute the following SQL query:

     ```sql
     SELECT * FROM member;
     ```

   - This query retrieves all members from the `member` table and it's data.

5. Create a post in the `post` table:

    - Execute the sql query command to create a new post:

    ``` sql
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, created_at, updated_at) VALUES ("af54cf8d-2bc3-4fc2-9529-d69d9d4480ba", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "text", "TypeScript", "<p>More info here www.typescriptlang.org</p>", "1111111-TypeScript", "60", "2023-06-26 11:30:00", "2023-06-26 11:30:00");
    INSERT INTO post (post_id, member_id, type, title, link, slug, points, created_at, updated_at) VALUES ("27246765-204e-4ac0-9c31-39e230bb499b", "a6e313e9-2797-434a-a3d6-c8e2e81eeac2", "link", "GitHub", "www.github.com" , "2222222-GitHub", "50",  "2023-06-27 11:30:00", "2023-06-27 11:30:00");
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, created_at, updated_at) VALUES ("9459825f-8c57-4066-9197-550e2f1207b0", "1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "text", "PlantUML", "<p>More info here https://plantuml.com/</p>", "3333333-PlantUML", "40", "2023-06-28 11:30:00", "2023-06-28 11:30:00");
    INSERT INTO post (post_id, member_id, type, title, link, slug, points, created_at, updated_at) VALUES ("72f4a8db-6af8-4e31-b196-7760aa47ae83", "73621c4d-139e-45cb-b3ea-52433283ec5a", "link", "Cucumber", "https://cucumber.io", "4444444-Cucumber", "30", "2023-06-29 11:30:00", "2023-06-29 11:30:00");
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, created_at, updated_at) VALUES ("2a641b88-a046-4be9-ae52-9cc2e58653a4", "1a67501a-4f06-4b25-b2aa-6c100fe26cf7", "text", "Docker", "<p>More info here https://hub.docker.com/</p>", "5555555-Docker", "20", "2023-06-30 11:30:00", "2023-06-30 11:30:00");
    INSERT INTO post (post_id, member_id, type, title, link, slug, points, created_at, updated_at) VALUES ("bccbecce-6c75-4c52-9603-f277f88bb137", "3ded78b6-094e-401c-bf10-df10ee51accf", "link", "Postman", "www.postman.com", "6666666-Postman", "10", "2023-07-01 11:30:00", "2023-07-01 11:30:00");    
    ```

    - This command creates 6 differents posts, text and link with different timestamps and score. The `post_id` was encripted with UUID generator and `slug` post is composed by 7 number and post title separated by hyfen:
        e.g. 1234567-Title-of-Post


6. Vote on the created posts:

    ```sql
    INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("d2d97243-2cfd-4bf4-b7a5-dbb2e3538be8", "af54cf8d-2bc3-4fc2-9529-d69d9d4480ba", "5a7799d4-dddf-4ae0-ad17-05b6d73fe60b", "UPVOTE", "2023-06-26 11:35:00", "2023-06-26 11:35:00");
    INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("9ff93b39-ff75-43bd-892b-9921611d4882", "27246765-204e-4ac0-9c31-39e230bb499b", "a6e313e9-2797-434a-a3d6-c8e2e81eeac2", "UPVOTE", "2023-06-27 11:35:00", "2023-06-27 11:35:00");
    INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("302f0c58-6ff5-4cc1-a716-1b000263495d", "9459825f-8c57-4066-9197-550e2f1207b0", "1425c4fb-ef64-4af8-8f35-a11dd0401fcb", "UPVOTE", "2023-06-28 11:35:00", "2023-06-28 11:35:00");
    INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("13aef126-18ab-401e-ae02-9953f620bb9f", "72f4a8db-6af8-4e31-b196-7760aa47ae83", "73621c4d-139e-45cb-b3ea-52433283ec5a", "UPVOTE", "2023-06-29 11:35:00", "2023-06-29 11:35:00");
    INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("83b178ba-454d-4769-a4ca-7f65f3db190b", "2a641b88-a046-4be9-ae52-9cc2e58653a4", "1a67501a-4f06-4b25-b2aa-6c100fe26cf7", "UPVOTE", "2023-06-30 11:35:00", "2023-06-30 11:35:00");
    INSERT INTO post_vote (post_vote_id, post_id, member_id, type, created_at, updated_at) VALUES ("03eb0c90-df31-4013-a71e-c53891b8f715", "bccbecce-6c75-4c52-9603-f277f88bb137", "3ded78b6-094e-401c-bf10-df10ee51accf", "UPVOTE", "2023-07-01 11:35:00", "2023-07-01 11:35:00");
    ```

 - This command inserts different scores into the created posts.
 

7. Verify the posts creation and its score on the database:

   - To ensure the posts were successfully created, and the points that a post has execute the following SQL query:

     ```sql
     SELECT * FROM post;
     ```

   - This query retrieves all posts and their data from the `post` table, allowing you to verify the created post's data.

## Test 1: SSD1 - Sort Posts by New: 

Steps:

* Go to DDDForum http://localhost:3000

* Select "New" option to sort posts accordingly

* Verify that the New posts list is displayed

Expected result:

* New option must be selected, and posts must be ordered by timestamp, most recent first

## Test 2: SSD2 - Sort Posts by Popular:

Steps:

* Go to DDDForum http://localhost:3000

* Verify that Popular posts list is displayed by default

* Select "Popular" option to sort posts accordingly, if necessary

Expected result:

* Popular option must be selected, and posts must be ordered by score, highest score first

## Test 3: Check that Popular and New option alternates between each other correctly:

Steps:

* Go to DDDForum http://localhost:3000

* Select "Popular" option to sort posts accordingly

* Select "New" option to sort posts accordingly

Expected result:

* The order of the displayed posts must change according to the selected option by the Visitor

### Acceptance Criteria
US009 - [Requirements Engineering](/docs//sprintA/us009/01.requirements-engeneering/readme.md)

### Tests
US009 - [Tests](/docs//sprintA/us009/02.tests/readme.md)

#### Additional info:

Hash generator: https://bcrypt-generator.com/

UUID generator: https://www.uuidgenerator.net/

Usernames | Passwords | Front-end login:    

* LuísAfonso: `'1222637.`
* NataliLucas: `'1222649.`
* NunoPinto: `'1222639.`
* RicardoCerqueir: `'1222642.`
* RitaCastro: `'1222643.`
* PauloTeixeira: `'1222013.`