const route = require("express").Router();
const { HomeController } = require("../controllers");
const projectRoutes = require("./projectRoute");
const authRoutes = require("./authRoute");
const contactMeRoutes = require("./ContactMeRoute");
const testimonialRoute = require("./testimonialRoute");
const verifyUser = require("../middlewares/verifyToken");

route.get("/", verifyUser, HomeController.getProjects);
route.use("/project", projectRoutes);
route.use("/auth", authRoutes);
route.use("/contact-me", contactMeRoutes);
route.use("/testimonial", testimonialRoute);

route.use((err, req, res, next) => {
  const errorName = err.name || "unknown error";
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(statusCode).json({
    success: false,
    name: errorName,
    code: statusCode,
    message: errorMessage,
    stack: err.stack,
  });
});

module.exports = route;

// cara matiin port
// netstat -ano | findstr :<PORT></PORT>
// taskkill /PID <PID> /F
