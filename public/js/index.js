let socket = io(); // initiate request...        

// let subject = document.getElementById("subject");
// let text = document.getElementById("text");
// let createTime = document.getElementById("createTime");

socket.on("connect", function () {
    console.log("Connected to server");    
});

socket.on("disconnect", function () {
    console.log("Disconnected from server");
});

socket.on("newMessage", function (data) {
    console.log("Message received: ", data);
});

socket.on("newMesage", function(data){
    console.log("New message received: ", data);
});