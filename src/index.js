const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const swaggerOptions = require('./swagger')

require('dotenv').config()

require('./database')

app.use(express.json())
app.use(cors())
app.use(routes)

app.use("/files", express.static(__dirname + '/uploads'));

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.listen(process.env.PORT)


