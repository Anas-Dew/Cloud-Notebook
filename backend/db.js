const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
// const mongoURI = "mongodb://localhost:27017";
const mongoURI = `${process.env.MONGO_URI}`;

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('Connected to MongoDB Succesfully!');
    })
}

module.exports = connectToMongo;