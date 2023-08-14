const cors = require('cors');

const allowedOrigins = [
    'http://localhost:5173',
    'https://ggfinalui.ridhoafwani.dev',
    'https://ggfinalui.vercel.app',
];

const corsMiddleware = cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
});

module.exports = corsMiddleware;
