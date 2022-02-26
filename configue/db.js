const mongoose = require('mongoose')

const configureDb = () => {
    mongoose.connect('mongodb://localhost:27017/Todo')
    .then((res)=>{
        console.log('db is connected')
    })
    .catch((res)=>{
        console.log('error while connecting db')
    })
}

module.exports = configureDb