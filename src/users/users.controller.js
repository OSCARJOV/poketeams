const uuid = require('uuid')
const crypto = require('../tools/crypto')
const initModels = require('../models/init-models')
const { to } = require('../tools/to')
const sequelize = require('../models/index').sequelize


const models = initModels(sequelize)

const createUser = async (data) => {
    const id = uuid.v4()
    const hashedPassword = crypto.hashPasswordSync(data.password)

    const newUser = await models.users.create({
        id,
        ...data,
        password: hashedPassword
    })

    return {
        message: `User created succesfully with id: ${id}`,
        user: newUser
    }
}

// console.log(createUser({
//     name:'Fredy',
//     email:'fredy@admin.com',
//     password:'root'
// }))

const getUserByEmail = async (email) => {
    const user = await models.users.findOne({
        where:{
            email
        }
    })
    return user
}

const checkUserCredential = async (email, password) => {
    const [user, err] = await to(getUserByEmail(email))
    if(!err || user){
        return crypto.comparePassword(password, user.password)
    }
    return null
}

checkUserCredential('admin@admin.com', 'root')

module.exports = {
    checkUserCredential,
    createUser,
    getUserByEmail
}