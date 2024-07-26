# Environmet configuration to run test 

## Setup steps:

1. Docker ON, with the project up by running the following commands in the project folder:

* docker-compose up
* npm run start:both

2. Clean database with the following commands:

* npm run db:delete:dev
* npm run db:create:dev
* npm run migrate:dev

3. Open MySQL Workbench

* Select "Database" tab
* Select "Connect to Database" menu

4. Insert following credentials:

* Username: tonysoprano
* Password: 12345678
* Port: 3306

5. The aplication is set.
