/* eslint-disable no-console */
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
const corsMiddleware = require('./middleware/cors');
const videoRoutes = require('./routes/videoRoute');
const productRoutes = require('./routes/productRoute');
const commentRoutes = require('./routes/commentRoute');
const userRoutes = require('./routes/userRoute');
const { initializeSocket } = require('./socket');
const errorHandler = require('./middleware/errorHandler');

const { DATABASE_URL, PORT } = process.env;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('connected', () => console.log('Connected to Database'));

const app = express();
const server = http.createServer(app);
initializeSocket(server);

app.use(corsMiddleware);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is the final API with GitHub Actions and Docker container. Happy coding :)');
});

// Route Handlers
app.use('/videos', videoRoutes);
app.use('/products', productRoutes);
app.use('/comments', commentRoutes);
app.use('/users', userRoutes);

app.use(errorHandler);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
