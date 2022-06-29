const uuid = require('uuid')
const initModels = require('../models/init-models')
const users = require('../models/users')
const { to } = require('../tools/to')

const sequelize =  require('../models/index').sequelize

const models = initModels(sequelize)
const getTeamOfUser = (userId) => {
    const [result, error] = to (
        models.pokemons.finAll({
        where: {
           user_id:userId
        },
        include: [{model: models.users, as: "team" }],
    })
    ); 
    if(!error || result ){
        return result
    }else {
        return null
    }
};

module.exports = {
    getTeamOfUser
}