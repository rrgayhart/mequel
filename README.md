# MeQuel

## Running Locally

- Pull down this repository: `git clone git@github.com:rrgayhart/mequel.git`
- Install dependencies: `npm install`
- To run the script: `npm start`
- To run the tests: `npm test`
- To run the linter: `npm run lint` or `npm run lintf` (note: you will need [eslint](https://www.npmjs.com/package/eslint) installed globally)

## Dependencies

node.js and npm -> `brew install node` -> [sitepoint guide if unfamiliar](https://www.sitepoint.com/beginners-guide-node-package-manager/)

mysql -> `npm install mysql –save` -> [gist guide if unfamiliar](https://gist.github.com/nrollr/3f57fc15ded7dddddcc4e82fe137b58e)


## Setting Up the Database

In the root directory, copy the database example file

```
  cp database.example.js database.js
```

Log into mysql

```
mysql -u mysql_user -p
```

Create the database

```
create database mequel_development;
create database mequel_test;
```

Create and grant access

```
create user db_user;
grant all on db_name.* to 'db_user'@'localhost' identified by 'db_password';
```

Make sure to change the appropriate data in your database.js file!

## Resources

- [using node mysql javascript blogpost](https://www.sitepoint.com/using-node-mysql-javascript-client/)
- [creating databases from the commandline](http://www.lanexa.net/2011/08/create-a-mysql-database-username-password-and-permissions-from-the-command-line/)