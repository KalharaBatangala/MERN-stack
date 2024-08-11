require('dotenv').config()

const express = require('express')
const workourRoutes = require('./routes/workouts')
const mongoose = require('mongoose')


//express app
const app = express()

//some middleware
app.use(express.json())

app.use( (req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/workouts',workourRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then( () => {
    //listen for request
    app.listen(process.env.PORT, () => {
    console.log('Connected to DB & Listening on PORT ',process.env.PORT);
    })
})
.catch( (error) => {
    console.log(error)
})


