var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

var server_port = process.env.YOUR_SERVER_PORT || process.env.PORT || 5000;
http.listen(server_port, () => {
  console.log("started ");
});
