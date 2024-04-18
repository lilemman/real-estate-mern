const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { dot } = require('node:test/reporters');
dotenv.config();
mongoose.connect(
  process.env.MONGO_URI).then(() => {
    console.log('Connected to Database');
  }).catch((err) => {
    console.log(err);
  })


const app = express();

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
