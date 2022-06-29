const bcrypt = require("bcrypt")

const hashPasswordSync = (plainTextPwd) => {
    return bcrypt.hashSync(plainTextPwd, 10)
}

const comparePassword = (plainPassword, hashPassword) => {
    bcrypt.compareSync(plainPassword, hashPassword)
}


exports.comparePassword = comparePassword
exports.hashPasswordSync = hashPasswordSync