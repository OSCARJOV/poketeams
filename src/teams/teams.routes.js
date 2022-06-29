const router = require('express').Router()
const teamController = require('./teams.controller')
const usersController = require('../users/users.controller')

const passport = require('passport'); 
const { to } = require('../tools/to');
require('../tools/auth')(passport);


router.route('/').get(
         passport.authenticate('jwt', {session: false}), //siempre que se va a proteger ruta
         async (req,res) =>{
            const [user, err] = await to (usersController.getUserByEmail(req.user.email));
            const [team, error] = await to (teamController.getTeamOfUser(user.id))
            res.status(200).json(team)
    });

    module.exports = {
        router
    }

