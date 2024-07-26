# SQL Commands for Data Insertion - US002 - Create a post

## To configure environment follow the link bellow:

[Enviromentconfig](./readme.md)

1. Insert a new member into the `base_user` table:
	```sql
    INSERT INTO base_user (base_user_id, user_email, username, user_password) VALUES ("1222637", "luisafonso@dddforum.com", "LuísAfonso", "$2a$12$lNPmuH//UkzRTFTIBi/Ybu5YRYAuKnO36jtEtGiSdoGx7Gmu5g8ju");
    ```

2. Verify that the user was successfully inserted:
	```sql
    select * from base_user;
    ```

3. Go to http://localhost:3000/login and verify that the user can login.

4. Add an ID to the member:
     ```sql
     INSERT INTO member (member_id, member_base_id, reputation) VALUES ("1111", "1222637", 0);
     ```

5. Verify that the member was successfully inserted
	```sql
    select * from member;
    ```

6. Create a post
	```sql
    INSERT INTO post (post_id, member_id, type, title, text, slug, points, created_at, updated_at) VALUES ("001", "1111", "text", "TypeScript", "More info here www.typescriptlang.org", "001-Post nº 001", "120", "2023-07-01 10:30:43", "2023-07-01 10:30:43");
    ```

7. Verify that the post was successfully inserted
	```sql
    select * from post;
    ```

8. Go to http://localhost:3000/login and verify that the post is visible.