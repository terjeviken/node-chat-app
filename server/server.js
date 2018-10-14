const path = require("path");
const socketIO = require("socket.io");
const http = require("http");
const express = require("express");
const app = express();

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
    
   let msg = {
      "from"  : "Hellboy",
      "text" : "You are so #4ckd :|",      
      "createdAt" : new Date()
    }; 

    cliSock.emit("newMessage", msg);

    cliSock.on("disconnect", (cliSock) => {
        console.log("client disconnected");
    });

    cliSock.on("createEmail", (newMail)=>{
        console.log("new email", newMail);
    });

    cliSock.on("createMessage", (data)=>{
        console.log("Create Message: ",data);
    });


});

server.listen(port, () =>{
    console.log("Server listening on port: " + port);
});



