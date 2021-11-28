const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
var cors = require('cors')

const app = express();
app.use(express.json());


const port = process.env.PORT || 9090;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
}


app.use(cors(corsOptions))

app.use(function (req, res, next) {
  //Enabling CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});


mongoose.connect('mongodb+srv://std:std1234@cluster0.b1201.mongodb.net/101274109_assignment2',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });



app.use(employeeRouter);



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//local

// app.listen(9090, () => { console.log('Server is running http://localhost:9090/') })