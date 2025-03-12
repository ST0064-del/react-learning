const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./database/database");
const seedDatabase = require("./database/seed");

const TaskRoutes = require("./routes/TaskRoutes");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", TaskRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Base de données SQLite synchronisée");
    // seedDatabase();
  })
  .catch((err) => console.error("Erreur de synchronisation", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
