let socket = io(); // initiate request...        

// let subject = document.getElementById("subject");
// let text = document.getElementById("text");
// let createTime = document.getElementById("createTime");

socket.on("connect", function () {
    console.log("Connected to server");
    socket.emit("createMessage",{
        "from" : "Woopie",       
        "text" : "Nothing going on here..."
    });
});

socket.on("disconnect", function () {
    console.log("Disconnected from server");
});

socket.on("newMessage", function (data) {
    console.log("Message received: ", data);
    // text.innerText = data.text;
    // subject.innerText = data.subject;
    // createTime.innerText = data.createTime;
});

socket.on("newMesage", function(data){
    console.log("New message received: ", data);
});