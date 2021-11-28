const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
// var cors = require('cors')

const app = express();
app.use(express.json());
// app.use(cors())



mongoose.connect('mongodb+srv://std:std1234@cluster0.b1201.mongodb.net/101274109_assignment2',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });



app.use(employeeRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//local

// app.listen(9090, () => { console.log('Server is running http://localhost:9090/') })