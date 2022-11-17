const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
// const mongoURI = "mongodb://localhost:27017";
const mongoURI = "mongodb+srv://public_user:me0IUpVVaY1PmvWV@copywordbase.pya1y.mongodb.net/?retryWrites=true&w=majority";
// const mongoURI = `${process.env.MONGO_URI}`;

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('Connected to MongoDB Succesfully!');
    })
}

module.exports = connectToMongo;