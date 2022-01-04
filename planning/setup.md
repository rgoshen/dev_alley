# Developer Alley Setup

## Database setup

### If starting from dev-ally.sql

```sh
$ createdb dev-alley-db
$ psql -U <username> -h localhost -d dev-alley-db -f dev-ally.sql
Delete and recreate dev-ally-db?
Return for yes or control-C to cancel >
psql:dev-ally.sql:4: ERROR:  cannot drop the currently open database
psql:dev-ally.sql:5: ERROR:  database "dev-ally-db" already exists
You are now connected to database "dev-ally-db" as user "postgres".
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
INSERT 0 2
INSERT 0 50
INSERT 0 200
Delete and recreate dev-ally_test db?
Return for yes or control-C to cancel >
psql:dev-alley.sql:14: ERROR:  database "dev-ally_test" does not exist
CREATE DATABASE
You are now connected to database "dev-ally_test" as user "postgres".
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
```

## Project setup
