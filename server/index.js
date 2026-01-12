const { Server } = require("socket.io");
const http = require("http");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();

const app = express();

const server = http.createServer(app);
const io = new Server(server, { 
		cors:{
			origin: process.emv.FRONTEND_URL,
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
