import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes"
const { createServer } = require("node:http");
const { Server } = require("socket.io");

dotenv.config()

const app = express();
const server = createServer(app);
const port = process.env.PORT || 3001;
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());
app.use(express.json());

routes(app);

app.listen(3001);
console.log("Server started");