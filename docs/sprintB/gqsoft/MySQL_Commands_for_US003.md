# SQL Commands for Data Insertion - US003 - View posts and their data

## To configure environment follow the link bellow:

[Enviromentconfig](./readme.md)

### Test 1: View posts list

1. Insert a new member into the `base_user` table:

   - Execute the following SQL Query to insert the member's details:

     ```sql
     INSERT INTO base_user (base_user_id, user_email, username, user_password) VALUE("1222637", "miriam.sancha@dddforum.com", "MiriamSancha", "$2a$12$DJyOYKxGHCyV4W7Rou/Qc.NdLYv4oLdElkDLYdw.rLJ38PiHEZ3Qa");
     ```

   - This command creates a new member with a base user ID, email, username, and password.


2. Verify the created member:

   - To check if the member was successfully inserted, execute the following SQL query:

     ```sql
     SELECT * FROM base_user;
     ```

   - This query retrieves all members from the `base_user` table, allowing you to verify the created member's details.

3. Add an ID to the member:

   - Use the following SQL query to assign an ID to the member:

     ```sql
     INSERT INTO member (member_id, member_base_id, reputation) VALUES ("6666", "1222637", 0);
     ```

   - This command creates a new entry in the `member` table with the provided ID and associates it with the corresponding `base_user` entry.


4. Create a post in the `post` table:

   - Execute the following SQL query to create two new posts:

     ```sql
     INSERT INTO post (post_id, member_id, type, title, text, slug, points, created_at, updated_at) VALUES ("001", "6666" "text", "Lorem ipsum", "Sit amet, consectetur adipiscing elit", "001-Post nº 001", "120", "2020-08-05 12:00:00", "2020-08-05 12:00:00");
     ```

     ```sql
     INSERT INTO post (post_id, member_id, type, title, text, slug, points, created_at, updated_at) VALUES ("002", "6666" "text", "Donec vel quam velit", "Aliquam facilisis non magna sit amet tristique.", "002-Post nº 002", "100", "2020-08-05 12:10:00", "2020-08-05 12:10:00");
     ```

   - These commands create two posts with the provided member ID (6666) and set various attributes such as type, title, text, slug, points, and timestamps.


5. Verify the posts creation in the database:

   - To ensure the posts were successfully created, execute the following SQL query:

     ```sql
     SELECT * FROM post;
     ```

   - This query retrieves all posts from the `post` table, allowing you to verify the newly created post's data.


6. Verify the posts on the frontend:

   - Access the following URL in a web browser to verify if the created posts are visible on the frontend interface of the API.

     [DDDForum](http://localhost:3000/)
