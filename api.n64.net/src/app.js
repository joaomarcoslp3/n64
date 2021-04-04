const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config() 

const gamesRouter = require('./routes/games')
const connect = require('./models')

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())
connect()

app.use('/games', gamesRouter)

app.listen(3000, () => console.log('🔥 Server running on http://localhost:3000 '))
