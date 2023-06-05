import http from "http";
import express from "express";
import { Server } from "socket.io";

// Init
const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log(`User Connected! ${socket}`);
});

app.listen(8080, () => {
    console.log("Server started on 8080");
});
