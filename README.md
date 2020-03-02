# railrecipe_hiring_task
Blogging Engine - (Node.js , Express.js , React.js , PostgreSQL)

# Instructions to use app
1. open client folder in terminal and execute folloing in CLI 1.`npm install` and then 2. `npm start`
2. open server folder in another terminal and execute following in CLI 1. `npm install` adn then `npm start`

### environment valirable
> create one `.env` file in root directory of server folder

* In `.env` include following
1. `DB_NAME = "name of your database"`
2. `DB_USERNAME = "username of database"`
3. `DB_PASSWORD = "your database password"`
4. `SECRET = "jwt secret- any sercet string"`

### To use this app with mySQL do following:
* Goto `server/database/config.js` and in that change `line no. 10` as `dialect: "mysql"`
