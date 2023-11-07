require('dotenv').config()

const swagger = {
    definition: {
        openapi: "3.0.0",
        servers: [{
            url: "http://localhost:" + process.env.PORT
        }],
        info: {
            title: "Desafio Cadastro API",
            version: "1.0.0",
            description: "Criando uma api com cadastro, edição e listagem de dados",
            contact: {
                name: "Rodrigo Luz"
            }
        }
    },
    apis: ["./src/routes.js"]
};

module.exports = swagger

