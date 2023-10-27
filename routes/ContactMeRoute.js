const { ContactMeController } = require("../controllers");
const verifyUser = require("../middlewares/verifyToken");
const contactMeRoute =  require("express").Router();

contactMeRoute.get("/", verifyUser, ContactMeController.ContactMe);

module.exports = contactMeRoute;
