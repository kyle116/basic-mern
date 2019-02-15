const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Will have any route in file location go to middleware route
const items = require('./routes/api/items');

// Server port
const port = process.env.PORT || 5000;

const app = express();
// Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose.connect('mongodb://localhost/basic-mern', { useNewUrlParser: true })
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

// Use Routes, testing routes will go to localhost:port/api/items
app.use('/api/items', items);


app.listen(port, () => console.log(`Server started on port ${port}`));