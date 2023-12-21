// app.js
const express = require('express');
const cors = require('cors');
const db = require("./app/models");
const mongoose = require('mongoose');
const connectDB = require('./app/config/connectDB');

const app = express();

const corsOption = {
  origin: "*"
};

// middleware
app.use(cors(corsOption));
app.use(express.json());

// connect database
connectDB();

require("./app/routes/vehicle.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
