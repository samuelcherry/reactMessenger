const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();

const io = new Server(server, { 
		cors:{
			origin: "*",
			methods: ["GET", "POST"],
		},
        });

io.on("connection", (socket) => {
	console.log("Client connected:", socket.id);

	socket.on("send_message", (data) => {
		io.emit("received_message", data)
	});

	socket.on("disconnect", () => {

		console.log("Client disconnected:", socket.id);
	});
});

server.listen(3000, () => {
	console.log("Socket.IO server running on port 3000");
});
