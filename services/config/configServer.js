const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const PORT = 5000;

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

module.exports = {
  app,
  express,
  cors,
  bodyParser,
  PORT,
  io,
};
