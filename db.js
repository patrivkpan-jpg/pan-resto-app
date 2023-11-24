const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;

// connect to the database
mongoose.connect(process.env.MONGODB_URI);

// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('Connection to database established successfully');
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.error(`Error connecting to database: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
});

require('./models/MenuModel')