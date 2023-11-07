const User = require('../models/User')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {

    async login(req, res){

        const {email, senha} = req.body;
        const user = await User.findOne({where: {email: email}});

        console.log(user)

        if(user == null)
            return res.status(200).json({success:false, mensagem: 'Usuário não encontrado'})
            
        try{
            if(await bcrypt.compare(senha, user.senha)){
                const secret = process.env.SECRET

                const token = jwt.sign(
                        {
                            id: user.id
                        }
                        , secret
                        )
                return res.status(200).json({success:true, mensagem: 'Usuário logado', token: token})
            }else{
               
                return res.status(200).json({success:false, mensagem: 'Senha inválida'})
            }
        }catch{
            return res.status(500).json({success: false, mensagem: 'Erro no login do usuário'})
        }
        
    },

    async lista(req, res){

        const user = await User.findAll();

        return res.json(user);
    },

    async retornaPorId(req, res){

        var _id = req.params.id; 
        const user = await User.findOne({where: {id: _id}});

        return res.json(user);
    },

    async cadastra(req, res){
        
        const {nome, email, senha, url_foto} = req.body;
        
        hashedPassword = await bcrypt.hash(senha, 10)

        console.log(req.body.url_foto)

        const user = await User.create({nome, email, senha: hashedPassword, url_foto: req.file ? req.file.filename : ''});

        return res.json(user);
    },

    async altera(req, res){ 

        const {id, nome, email, senha, url_foto } = req.body;

        hashedPassword = await bcrypt.hash(senha, 10)
        console.log(req.file)

        console.log(req.body.url_foto)
        const user = await User.update({nome, email, senha: hashedPassword, url_foto: req.file ? req.file.filename : req.body.url_foto}, 
            {where: {id: id} });

        return res.json(await User.findOne({where: {id: id}}));
    },

    async deleta(req, res){
        var _id = req.params.id; 

        const user = await User.destroy(
            {
                where: {id:_id}
            }
        )
        
        return res.json(user);
    },
}