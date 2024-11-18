const express = require('express');
const cors = require('cors');
const connect = require('./database/db');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('short'));
app.use(cors({
    origin: ['http://192.168.34.106:3000', 'http://localhost:3000','http://localhost:5173','https://nexisparkx.vercel.app','https://nexisparkx-com.vercel.app'],
    credentials: true,
}));

// Routes
const registrationroute = require('./Router/registrationroute');
const feedbackroute = require('./Router/feedbackroute');

app.use('/register', registrationroute);
app.use('/feedback', feedbackroute);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

// Start Server
const SetupServer = async () => {
    await connect();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

SetupServer();
