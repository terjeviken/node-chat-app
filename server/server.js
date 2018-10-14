const path = require("path");
const socketIO = require("socket.io");
const http = require("http");
const express = require("express");
const app = express();
const message = require("./utils/message");
const port =  process.env.PORT || 3000;
const publicPath = path.join(__dirname, "../public");

const server = http.createServer( app );
const io = socketIO(server); // io = web socket server... 

const users = {};

app.use(express.static(publicPath));
// app.get("/", function(req,res){
//     res.sendFile("index.html");
// });


io.on("connection", (cliSock) => {

    console.log("new user connected");
    cliSock.emit("newMessage", message.generateMessage("Admin", "Welcome to chat - behave!"));

    cliSock.broadcast.emit("newMessage",{
        from: "Admin",
        text: "new user joined...",
        createdAt: new Date().getTime()
    });

    cliSock.on("disconnect", (cliSock) => {
        console.log("client disconnected");
    });

    cliSock.on("createMessage", (msg, callback)=>{
        console.log("Create Message: Distributing: ",msg);


        io.emit("newMessage", {
            from: msg.from,
            text: msg.text,
            createdAt: new Date().getTime()
        });
        callback("This is from the server..");

        // socket.broadcast.emit("newMessage", {
        //     from : msg.from,
        //     text: msg.text,
        //     createdAt: new Date().getTime()
        // });
    });


});

server.listen(port, () =>{
    console.log("Server listening on port: " + port);
});



