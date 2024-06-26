const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

dotenv.config();
connectDB(); //mongodb connection
const app = express();
app.use(cors());
app.use(express.json()); // to accept json data from req body sent from fe 

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);
 
 app.get('/', (req, res) => {
    //console.log('hello from server');
    res.send('Api running');
}) 

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));

const io = require("socket.io")(server, {
  pingTimeout: 120000,
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    console.log(`Logged in user ${userData.name} joined the created room`);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined the selectedChat Room: " + room);//room-selectedChatId
  });
  
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });

});  
