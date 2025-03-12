const {
  app,
  express,
  cors,
  bodyParser,
  io,
  PORT,
} = require("./config/configServer");

const NotifRoutes = require("./routes/NotifRoutes");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Gestion des connexions socket.io
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// route
app.use("/api/", NotifRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
