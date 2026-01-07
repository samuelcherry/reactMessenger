const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();

const io = new Server(server, { 
		cors:{
			origin: "http://localhose:5173",	
		},
        });

io.on("connection", (socket) => {
	console.log("Client connected:", socket.id);
	
	socket.on("disconnect", () => {

		console.log("Client disconnected:", socket.id);
	});
});

server.listen(3000, () => {
	console.log("Socket.IO server running on port 3000");
});
