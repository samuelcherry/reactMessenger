const { Server } = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const server = http.createServer();
const FRONTEND_URL = process.env.FRONTEND_URL;
const io = new Server(server, { 
		cors:{
			origin: FRONTEND_URL,
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

const PORT = process.env.PORT || 3000;


server.listen(PORT, () => {
	console.log("Socket.IO server running on port 3000");
});
