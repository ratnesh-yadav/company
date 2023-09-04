const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const app = express();
app.use(cors('*'));
const MONGODB_URI = 'mongodb://0.0.0.0:27017/';
const DB_NAME = 'officedb';
const PORT = process.env.PORT || 5000;


mongoose
.connect('mongodb://0.0.0.0:27017/officedb')
.then(() => {
 console.log('Connected to the Database successfully');
}).catch(err=>{
  console.log(err);
});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());

app.use('/employee', require('./routes/employee'));

app.use('/employee_details', require('./routes/employee_details'));

app.use('/department',require('./routes/department'));

app.use('/department_details',require('./routes/department_details'));



app.listen(PORT, () => {
    console.log('Listening to port number ' + PORT + ' ...');
  })
  app.timeout = 500000;






