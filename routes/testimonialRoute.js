const { TestimonialController } = require("../controllers");
const verifyUser = require("../middlewares/verifyToken");
const testimonialRoute = require("express").Router();

testimonialRoute.get("/", verifyUser, TestimonialController.testimonial);

module.exports = testimonialRoute;
