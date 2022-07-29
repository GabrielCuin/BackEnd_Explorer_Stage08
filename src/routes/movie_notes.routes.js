const MovieNotesController = require("../controllers/MovieNotesController");

const { Router } = require("express");

const movieRoutes = Router();

const movieNotesController = new MovieNotesController();

movieRoutes.get("/", movieNotesController.index);
movieRoutes.post("/:user_id", movieNotesController.create);
movieRoutes.get("/:id", movieNotesController.show);
movieRoutes.delete("/:id", movieNotesController.delete);

module.exports = movieRoutes;
