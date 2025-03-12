const express = require("express");
const route = express.Router();
const NotifController = require("../controllers/NotifController");

route.get("/notify", NotifController.getNotif);

module.exports = route; // Route pour obtenir toutes les tâches
