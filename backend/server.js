require('dotenv').config()
const express = require('express');
const animeRoutes = require('./routes/routes')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/anime', cors(corsOptions),animeRoutes)
//app.use(cors(corsOptions));
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


