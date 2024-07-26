# SQL Commands for Data Insertion - US009 - Sort Posts by Popular or New

## Setup steps:

1. Docker ON, with the project up by running the following commands in the project folder:

* docker-compose up
* npm run start:both

2. Clean database with the following commands:

* npm run db:delete:dev
* npm run db:create:dev
* npm run migrate:dev

3. Open MySQL Workbench

* "Database" tab
* "Connect to Database" menu

4. Insert following credentials:

* Username: tonysoprano
* Password: 12345678
* Port: 3306

## MySQL Data Insertion for testing US009 - Sort Posts by Popular or New:

1 - To insert data into the tables: `base_user`, `member`, `post`, `post_vote`, please paste and run the following sql script in MySQL Workbench

Folder: [sprintB/gqsoft/sql_files/US009_insert_data.sql](/docs/sprintB/gqsoft/sql_files/US009_insert_data.sql)

2 - The tables are now filled with different information:

2.1 - Table: `base_user`

* 6 members with different email, username, and password
* 6 encrypted passwords with the Hash generator
* 6 `base_user_id` encrypted with UUID generator
* different timestamp between users creation

2.2 - Table: `member`
* `member_id` encrypted with UUID generator
* the same timestamp as the users creation, as mentioned before

2.3 - Table: `post`
* 6 different type of posts, text/link
* different timestamps between them
* different score between them
* 6 `post_id `encrypted with UUID generator
* 6 `slug` post id composed by 7 numbers and post title separated by hyfen
    
        e.g. 1234567-Title-of-Post

2.4 - Table: `post_vote`
* 6 `post_vote_id `encrypted with UUID generator


## Testing US009 - Sort Posts by Popular or New

**Test 1 - SSD1 - Sort Posts by New:**

Steps:

* Go to DDDForum http://localhost:3000

* Select "New" option to sort posts accordingly

* Verify that new posts list is displayed

Expected result:

* New option must be selected, and posts must be ordered by timestamp, with the most recent first

**Test 2 - SSD2 - Sort Posts by Popular:**

Steps:

* Go to DDDForum http://localhost:3000

* Verify that Popular posts list is displayed by default

* Select "Popular" option to sort posts accordingly, if necessary

Expected result:

* Popular option must be selected, and posts must be ordered by score, highest score first

**Test 3 - Check that Popular and New option alternates between each other correctly:**

Steps:

* Go to DDDForum http://localhost:3000

* Select "Popular" option to sort posts accordingly

* Select "New" option to sort posts accordingly

Expected result:

* The order of the displayed posts must change according to the selected option by the Visitor

## Additional info:

SQL query's used:

* SELECT * FROM base_user;
* SELECT * FROM member;
* SELECT * FROM post;
* SELECT * FROM post_vote;

US009 - [Requirements Engineering](/docs//sprintA/us009/01.requirements-engeneering/readme.md)

US009 - [Tests](/docs//sprintA/us009/02.tests/readme.md)

Hash generator: https://bcrypt-generator.com/

UUID generator: https://www.uuidgenerator.net/

Usernames | Passwords | Front-end login: 

* LuísAfonso: `'1222637.`

* NatalyLucas: `'1222649.`

* NunoPinto: `'1222639.`

* RicardoCerqueir: `'1222642.`

* RitaCastro: `'1222643.`

* PauloTeixeira: `'1222013.`