const projectRoute = require("express").Router();
const { ProjectController } = require("../controllers");
const verifyUser = require("../middlewares/verifyToken");
const upload = require("../middlewares/UploadFIles");

projectRoute.post(
  "/add-project",
  verifyUser,
  upload.single("upload-image"),
  ProjectController.create
);
projectRoute.get("/add-project", verifyUser, ProjectController.createPage);
projectRoute.get("/detail-project/:id", verifyUser, ProjectController.detail);
projectRoute.get("/delete/:id", verifyUser, ProjectController.delete);
projectRoute.post(
  "/update/:id",
  verifyUser,
  upload.single("upload-image"),
  ProjectController.update
);
projectRoute.get("/update/:id", verifyUser, ProjectController.updatePage);

module.exports = projectRoute;
