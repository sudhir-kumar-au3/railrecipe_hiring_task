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
            allowNull: false,
            
        },
        body: {
            type: datatype.TEXT,
            allowNull: false
        }
    },{});
    return BlogModel;
}