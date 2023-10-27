const createError = require("../middlewares/createError");
const { Project, User } = require("../models");
const Swal = require("sweetalert2");

class ProjectController {
  static createPage(req, res, next) {
    res.render("add-project");
  }

  static async updatePage(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const data = await Project.findByPk(id);
      const startDate = new Date(data.startDate);
      const endDate = new Date(data.endDate);
      const formattedEndDate = endDate.toISOString().split("T")[0];
      const formattedStartDate = startDate.toISOString().split("T")[0];
      res.render("edit-project", {
        data: { ...data.dataValues, formattedStartDate, formattedEndDate },
      });
    } catch (error) {
      next(error);
    }
  }

  static async detail(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const data = await Project.findByPk(id);
      const duration = ProjectController.calculateMonths(
        data.dataValues.startDate,
        data.dataValues.endDate
      );
      // console.log(data.dataValues);
      res.render("detail-project", { data: { ...data.dataValues, duration } });
    } catch (error) {
      next(error);
    }
  }
  static calculateMonths(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    return Math.max(1, months);
  }
  static async create(req, res, next) {
    try {
      let { nodeJs, nextJs, reactJs, typeScript, img, ...otherBody } = req.body;
      img = req.file.filename;
      nodeJs = nodeJs === "true";
      nextJs = nextJs === "true";
      reactJs = reactJs === "true";
      typeScript = typeScript === "true";
      const authorId = req.user.dataValues.id;
      await Project.create({
        ...otherBody,
        img,
        nodeJs,
        nextJs,
        reactJs,
        typeScript,
        authorId,
      });
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const project = await Project.findByPk(id);

      if (!project) {
        return next(createError(404, "Project not found"));
      }

      const authorId = req.user.dataValues.id;
      if (authorId !== project.dataValues.authorId) {
        return next(
          createError(401, "Anda tidak memiliki izin untuk menghapus ini")
        );
      }

      const response = await Project.destroy({
        where: { id },
      });

      if (response === 1) {
        res.redirect("/");
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async update(req, res, next) {
    // console.log(req.body);
    try {
      const id = parseInt(req.params.id);
      const project = await Project.findByPk(id);

      if (!project) {
        return next(createError(404, "Project not found"));
      }

      const authorId = req.user.dataValues.id;
      if (authorId !== project.dataValues.authorId) {
        return next(
          createError(401, "Anda tidak memiliki izin untuk menghapus ini")
        );
      }

      if (!project) {
        return next(createError(404, "Project not found"));
      }
      let { img, ...others } = req.body;
      // console.log("A");
      img = req.file.filename;
      // console.log(req.body, img);

      const response = await Project.update(
        { img, ...others },
        {
          where: {
            id,
          },
        }
      );
      if (response[0] === 1) {
        res.redirect("/");
        // res.status(200).json({
        //   msg: "Project updated successfully",
        // });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ProjectController;
