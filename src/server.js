const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const Database = require('/database/db')

const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server,
    noCache: true, 

})

server.use(express.static("public"))
//receber os dados do req.body
.use(express.urlencoded({ extended : true}))

.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)

.post("/save-classes", saveClasses)

.listen(5500)



