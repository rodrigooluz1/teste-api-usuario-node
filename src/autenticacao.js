
require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {

    checkToken: function (req, res, next){
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if(!token)
            return res.status(400).json({success:false, mensagem: 'Acesso negado'})

        try{

            const secret = process.env.secret

            jwt.verify(token, secret) 

            next()

        }catch(err){
            return res.status(400).json({success:false, mensagem: 'Token inválido'})
        }
        
    }

}