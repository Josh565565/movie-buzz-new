const mongoose = require('mongoose')
require('dotenv').config()

const connectionUrl = process.env.DB_URL

const connectMongodb = async () => {
    try {
        await mongoose.connect(connectionUrl)
        console.log("Database conncted successfully")
    } catch (error) {
        console.log(error.message)
        process.exit(1);
    }
}

module.exports = connectMongodb