require('dotenv').config()

const express = require('express')
const workourRoutes = require('./routes/workouts')

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


//listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening on PORT ',process.env.PORT);
})
