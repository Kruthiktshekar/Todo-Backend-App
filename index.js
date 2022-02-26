const express = require('express')
const app = express()

const configureDb = require('./configue/db')
configureDb()

app.listen(4528,()=>{
    console.log('server is started')
})