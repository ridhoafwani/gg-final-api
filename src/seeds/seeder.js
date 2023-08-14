/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // Import dotenv
const Video = require('../models/video');
const Product = require('../models/product');
const videoData = require('./videoData');
const getRandomProduct = require('./productData');

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function seedDatabase() {
    try {
        await Video.deleteMany({});
        await Product.deleteMany({});

        const videos = await Video.insertMany(videoData);

        const generatedProductData = [];

        videos.forEach((video) => {
            for (let i = 1; i <= 8; i++) {
                generatedProductData.push({
                    videoId: video._id,
                    ...getRandomProduct(),
                });
            }
        });

        await Product.insertMany(generatedProductData);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.disconnect();
    }
}

seedDatabase();
