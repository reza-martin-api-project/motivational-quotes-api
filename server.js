const express = require('express'); // import express from 'express'
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./route.js');
require('dotenv').config();

// Initialize express application
const app = express();

// Use heroku port or port 5000
const port = process.env.PORT || 5000;

// Bypass cors and parse req and res into json format
app.use(cors());
app.use(express.json());
const uri = process.env.MONGO_CONNECT;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connected to database');
});

app.use('/', router);
app.listen(port, () => {
    console.log('listening on port ', port);
});
