const express = require("express");
const path = require("path");
const app = express();
const PORT = 8800;
const {
  renderIndexPage,
  handleNewProject,
  renderAddProjectPage,
  renderContactMePage,
  renderTestimonialsPage,
} = require("./route.js");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// set static file server
app.use(express.static("src/assets"));

// parsing data from client
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", renderIndexPage);
app.get("/project", renderAddProjectPage);
app.post("/project", handleNewProject);
app.get("/contact", renderContactMePage);
app.get("/testimonial", renderTestimonialsPage);
