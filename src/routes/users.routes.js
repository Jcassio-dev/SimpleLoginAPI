const {Router} = require("express");

const UsersController = require("../controllers/usersController")

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.status(201).post("/", usersController.create);

module.exports = usersRoutes;