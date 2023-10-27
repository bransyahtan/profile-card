const ProjectController = require("./projectController.js");
const AuthController = require("./authController.js");
const ContactMeController = require("./ContactMeController.js");
const TestimonialController = require("./testimonialController.js");
const HomeController = require("./homeController.js");

module.exports = {
  ProjectController,
  AuthController,
  ContactMeController,
  TestimonialController,
  HomeController,
};

// cara matiin port
// netstat -ano | findstr :<PORT></PORT>
// taskkill /PID <PID> /F
