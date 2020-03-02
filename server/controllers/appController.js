const {User, Blog}  = require('../database/config');

const getAllBlog = (req,res) =>{
    if(req.params.userId){
        Blog.findAll({
            include:[
                {
                    model: User,
                    where: {
                        id: req.params.userId
                    }
                }
            ],
            order: [['updatedAt', 'DESC']]
        })
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json({error: error.message})
        })
    }
    else{
        Blog.findAll({
            include:[User],
            order: [['updatedAt', 'DESC']]
        })
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json({error: error.message})
        })
    }
}

module.exports = {
    getAllBlog
}