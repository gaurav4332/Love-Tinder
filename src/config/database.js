require('dotenv').config();
const mongoose = require('mongoose');


// Connection URL
const url = process.env.MONGO_URI

const connectDb = async () => {
    await mongoose.connect(url)
}

module.exports =connectDb