require('dotenv').config()

module.exports = {
    dialect: process.env.DB_DIALECT,
    server: process.env.DB_SERVERNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    define: {
        timestamps: true,
        underscored: true
    },
    dialectOptions: {
        instanceName: process.env.DB_INSTANCENAME
    }
}