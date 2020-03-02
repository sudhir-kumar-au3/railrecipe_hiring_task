const {User} = require('../database/config');
module.exports = (sequelize, datatype) => {
    const BlogModel = sequelize.define('blog',{
        blogId: {
            type: datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: datatype.STRING,
            allowNull: false
        },
        cover: {
            type: datatype.STRING,
            defaultValue: "https://cdn.pixabay.com/photo/2016/01/09/18/28/old-1130743_960_720.jpg",
            
        },
        userId: {
            type: datatype.INTEGER,
            references:{
                model: User,
                key: 'id'
            },
            allowNull: false
        },
        body: {
            type: datatype.TEXT,
            allowNull: false
        }
    },{});
    return BlogModel;
}