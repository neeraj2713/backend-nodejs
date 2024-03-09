// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'

dotenv.config({
    path: './.env'
});


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!!", err)
})











/* approach 1 - making the server in the index.js file
import express from 'express';
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        app.on("error", (error) => {
            console.log("ERR: ", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch(error) {
        console.error("ERROR: ", error)
        throw error
    }
}) ()

*/