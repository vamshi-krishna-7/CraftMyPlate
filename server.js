require('dotenv').config()

const express = require('express');
const mongoose = require("mongoose");
const productRoute = require('./routes/productRoute');

const errorMiddleware = require('./middleware/errorMiddleware')

const app = express()

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

//middleware
app.use(express.json())

app.use('/api/products', productRoute)


app.use(errorMiddleware)

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})




// connecting to database
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log(`Node API app is running on port ${PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})
