const express = require('express')
const routes = express.Router();
const UserController = require('./controllers/UserController')

const upload = require('./config/multer')
const auth = require('./autenticacao')

routes.get('/', (req, res) => {
    return res.json({projeto_pessoal: 'Projeto pessoal: API CRUD'})
})

routes.post('/login', UserController.login);
routes.get('/User', auth.checkToken, UserController.lista);
routes.get('/User/:id', auth.checkToken, UserController.retornaPorId);
routes.post('/User', upload.single('file'), auth.checkToken, UserController.cadastra);
routes.put('/User',  upload.single('file'), auth.checkToken, UserController.altera);
routes.delete('/User/:id', auth.checkToken, UserController.deleta)


module.exports = routes
