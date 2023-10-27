const { Project, User } = require("../models");

class HomeController {
  static async getProjects(req, res, next) {
    try {
      const authorId = req.user.dataValues.id;
      // querynya : select * from "Project"
      let data = await Project.findAll({
        where: {
          authorId,
        },
        include: [User],
        order: [["id", "ASC"]],
      });
      // console.log(req.user.dataValues.name);
      data = data.map((item) => {
        return {
          ...item.dataValues,
          duration: HomeController.calculateMonths(
            item.startDate,
            item.endDate
          ),
          authorName: req.user.dataValues.name,
        };
      });
      // const authorName = req.user.dataValues.name;
      // console.log(data);
      res.render("index", { data });
      // res.render("index", { data: { ...data, authorName } });
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
}

module.exports = HomeController;
