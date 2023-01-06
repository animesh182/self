const express = require('express')
const app = express()
const lists = require('./routes/router')
const connect = require('./db/connect')
require('dotenv').config()


app.use(express.json())

app.use(express.static('./public'))

app.use('/api/v1/list', lists )

const port = 3000

const start = async () =>{
    try {
        await connect(process.env.MONGO_URI)
        app.listen(port, () => console.log('The website is running at http://localhost:3000')
        )
        
    } catch (error) {
        console.log(error)
    }

}

start()