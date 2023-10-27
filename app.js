const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const multer = require("multer");

app.use(
  cors({
    origin: "http://localhost:300",
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("assets"));
app.use(express.static("uploads"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => console.log(`Listening http://localhost:${PORT}`));
