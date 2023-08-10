/* eslint-disable no-console */
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const videoRoutes = require('./routes/videoRoute');
const productRoutes = require('./routes/productRoute');
const commentRoutes = require('./routes/commentRoute');
const userRoutes = require('./routes/userRoute');

const databaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT;

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('connected', () => console.log('Connected to Database'));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is final api');
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/videos', videoRoutes);
app.use('/products', productRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: error.message,
    });
});
app.listen(port);
console.log(`Server is running on port ${port}`);
