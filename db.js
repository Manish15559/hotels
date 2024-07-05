const mongoose =require('mongoose');
require('dotenv').config();

//define the mongodb  connection url

// const mongoURL= 'mongodb://localhost:27017/hotels' //replace 'mydatabase with ur database name'


const mongoURL=process.env.MONGODB_URL;

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the default connection
//mongoose maintains a default connection object representing the mongodb connection.
const db=mongoose.connection;

//define event listeners for database connection

db.on('connected',()=>{
    console.log('connected to mongodb server..');
});
db.on('error',(err)=>{
    console.log('mongoDB connection error',err);
});
db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});

//export the database connection
module.exports=db;