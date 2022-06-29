const jwt = require('jsonwebtoken')

const userControllers = require('./users.controller')

const to = require('../tools/to').to;

const loginUser = async (req, res) => {
    if(!req.body){
        return res.status(400).json({message: 'Missing data'})
    } else if (!req.body.email || !req.body.password){
        return res.status(400).json({message: 'Missing data'})
    }
    const [response, err] = await to(userControllers.checkUserCredential(
        req.body.email,
        req.body.password
    ))
    if(err || !response){
        return res.status(401).json({message: 'Invalid credentials'})
    }

    const [user, error] = await to(userControllers.getUserByEmail(req.body.email))

    if(error || !user){
        return res.status(401).json({message: 'Invalid credentials'})
    }

    const token = jwt.sign({
        id: user.id,
        email: user.email
    }, 'academlo')

    res.status(200).json({token})









} 


