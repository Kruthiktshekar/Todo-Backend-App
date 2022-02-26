const express = require('express')
const app = express()
//invoke express json
app.use(express.json())

//invoke route
const route = require('./configue/router')
app.use(route)

//importing configureDb
const configureDb = require('./configue/db')

configureDb()

app.listen(4528,()=>{
    console.log('server is started')
})