require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const roomController = require("./controllers/roomController");
const messageController = require("./controllers/messageController");
const jwt = require("jwt-simple");
const path = require("path");


const PORT = process.env.PORT || 3001;

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Setup middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./services/passport');
app.use(routes);

//for production only
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req,res) => {
        return res.sendFile(path.join(__dirname, "./client/build/index.html"));
    })
}

// Connect database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chat_db', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });

io.on("connection", socket => {
    console.log("New client connected.", socket.id);
    socket.on("message", data => {
        //data is {formvalues, user, room}
        messageController.createMessage(data, activeRoom => {
            io.to(data.room._id).emit("serverToClientMessage", activeRoom);
        })
    });
    socket.on("deleteMessage", data => {
        messageController.deleteMessage(data, activeRoom => {
            io.to(data.roomId).emit("serverToClientMessage", activeRoom);
        })
    })
    socket.on("createRoom", data => {
        //data is the room name and userID
        roomController.createRoom(data, newRoom => {
            io.emit("serverToClientRoom", newRoom);
        });
    })
    socket.on("getAllRooms", () => {
        roomController.getAllRooms(rooms => {
            if (rooms !== "Error") {
                socket.emit("serverToClientRoom", rooms);
            }
        });
    })
    socket.on("deleteRoom", data => {
        //data is { token:"asdasd", payload: "id of room" }
        let decoded = jwt.decode(data.token, process.env.SECRET);
        // decoded = { sub: 'asdada', iat: TimeStamp}
        //decoded.sub is id of user
        roomController.deleteRoomById(data.payload, decoded.sub, rooms => {
            if (rooms !== "Error") {
                io.emit("loadAllRooms", rooms);
            }
        });
    })
    socket.on("getActiveRoom", data => {
        socket.join(data.roomId);
        roomController.getActiveRoom(data, activeRoom => {
            io.to(data.roomId).emit("activeRoom", activeRoom);
            io.to(data.roomId).emit("userJoinMessage", { message: `${data.user.firstName}\u00A0${data.user.lastName} has joined the room at` });
            socket.room = activeRoom;
            socket.user = data.user;
        })
    })

    socket.on("leaveRoom", data => {
        socket.leave(data.room._id);
        io.to(data.room._id).emit("userLeftMessage", { message: `${data.user.firstName}\u00A0${data.user.lastName} has left the room at` });
        socket.emit("userLeftMessage", { message: `${data.user.firstName}\u00A0${data.user.lastName} has left the room at` });
        roomController.getActiveRoomAfterDelete(data, activeRoom => {
            socket.broadcast.to(data.room._id).emit("activeRoom", activeRoom);
        })
    })

    socket.on("isTyping", data => {
        socket.broadcast.to(data.room._id).emit("userTyping", { typingText: `${data.user.firstName}\u00A0${data.user.lastName} is typing...`})
    })

    socket.on("notTyping", data => {
        socket.broadcast.to(data.room._id).emit("userNotTyping", { typingText: ""})
    })

    socket.on("disconnect", () => {
        console.log("Client disconnected.", socket.id);
        if(socket.room) {
        io.to(socket.room._id).emit("userLeftMessage", { message: `${socket.user.firstName}\u00A0${socket.user.lastName} has left the room at` });
        roomController.getActiveRoomAfterDelete(socket,  activeRoom => { 
            io.to( socket.room._id ).emit("activeRoom", activeRoom);
            socket.leave(socket.room._id);
        })
    }
    });

});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

