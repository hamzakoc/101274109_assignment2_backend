const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
var cors = require('cors')

const app = express();
app.use(express.json()); // Make sure it comes back as json
app.use(cors())

//TODO - Replace you Connection String here

mongoose.connect('mongodb+srv://std:std1234@cluster0.b1201.mongodb.net/101274109_assignment2',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
// mongoose.connect('mongodb://localhost:27017/myapp');


app.use(employeeRouter);




const port = process.env.PORT || 9090
app.listen(port, () => { console.log('Server is running http://localhost:9090/') })