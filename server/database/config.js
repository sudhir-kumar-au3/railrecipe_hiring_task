const Sequelize = require('sequelize');
const UserModel = require('../models/user');
const BlogModel = require('../models/blog');
const dotenv=require("dotenv");
dotenv.config();


const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, {
  host: 'localhost',
  dialect: 'postgres'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = UserModel(sequelize, Sequelize);
const Blog = BlogModel(sequelize, Sequelize);

Blog.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
User.hasMany(Blog, {
  foreignKey: "userId",
  onDelete: 'CASCADE'
});

//to create table automatically in psql
sequelize.sync({force: true})
  .then(() => {
    console.log(`Database & tables created!`)
  })
  .catch(error => console.log("DB error: ",error));
  
module.exports = {
    User,
    Blog
}