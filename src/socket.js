const { Server } = require('socket.io');

function initializeSocket(server) {
    const io = new Server(server, {
        cors: {
            origin: [
                'http://localhost:5173',
                'https://ggfinalui.ridhoafwani.dev',
                'https://ggfinalui.vercel.app',
            ],
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        socket.on('join_room', (data) => {
            socket.join(data);
        });

        socket.on('add_comment', (data) => {
            socket.to(data).emit('new_comment');
        });
    });

    return io;
}

module.exports = { initializeSocket };
