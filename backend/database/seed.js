const sequelize = require("./database");
const Task = require("../models/Task");

const seedDatabase = async () => {
  try {
    // Synchroniser la base de données (supprime les données existantes si force: true)
    await sequelize.sync({ force: true });

    // Insérer des tâches de test
    await Task.bulkCreate([
      { name: "Tâche 1", priority: 1, Deadline: "2025-03-01" },
      { name: "Tâche 2", priority: 3, Deadline: "2025-02-28" },
      { name: "Tâche 3", priority: 2, Deadline: "2025-03-05" },
      { name: "Tâche 4", priority: 5, Deadline: "2025-02-27" },
    ]);

    console.log("✅ Données de test insérées avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors de l'insertion des données :", error);
  } finally {
    await sequelize.close(); // Fermer la connexion après insertion
  }
};

module.exports = seedDatabase;
