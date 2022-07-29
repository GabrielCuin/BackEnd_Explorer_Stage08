const { Router } = require("express");

const userRouter = require('./users.routes.js')
const MovieTagRouter = require('./movie_tags.routes.js')
const MovieNoteRouter = require('./movie_notes.routes.js')

const routes = Router();

routes.use("/users", userRouter)
routes.use("/movie_tags", MovieTagRouter)
routes.use("/movie_notes", MovieNoteRouter)

module.exports = routes;