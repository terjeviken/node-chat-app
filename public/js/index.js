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
    let li = jQuery("<li></li>");
    li.text(`${data.from}: ${data.text}`);
    jQuery("#messages").append(li);

});


jQuery("#message-form").on("submit", function(e){
    e.preventDefault(); // don't refresh
    socket.emit("createMessage", {
        from: "User",
        text: jQuery("[name=message]").val()
    }, function(){

    });
});