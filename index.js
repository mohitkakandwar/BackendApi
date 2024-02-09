const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.listen( () => {
    console.log(`Server Started at ${3000}`)
})

// including mongodb

require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


// including routes
const routes = require('./routes/routes');
app.use('/api', routes);


