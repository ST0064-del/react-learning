exports.getNotif = async (req, res) => {
  try {
    return res.status(200).json({ message: "nothing" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Erreur serveur");
  }
};
