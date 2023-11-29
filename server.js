
const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session')
const MongoStore = require('connect-mongo');
require('dotenv').config()
require('./db')

const app = express();

// CORS Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// express middleware handling the form parsing
app.use(express.urlencoded({extended: false}));

// express middleware handling the body parsing 
app.use(express.json());

// mongostore to store express-session
const store = new MongoStore({
    mongoUrl: process.env.MONGODB_URI,
    collectionName: 'sessions'
}) 

app.use(session({
    secret: process.env.APP_KEY,
    resave: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 60000,
    },
    saveUninitialized: false,
    store: store
}))

// middleware for handling sample api routes
app.use('/api/v1/menu', require('./routes/api/menu'));
app.use('/api/v1/admin', require('./routes/api/admin'));

// create static assets from react code for production only
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

// use port from environment variables for production
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
