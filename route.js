const renderIndexPage = (req, res) => {
  res.render("index");
};

const handleNewProject = (req, res) => {
  const {
    input_project_name,
    input_project_start,
    input_project_end,
    project_description,
  } = req.body;
  console.log("Nama project : ", input_project_name);
  console.log("Start Date : ", input_project_start);
  console.log("End Date : ", input_project_end);
  console.log("Description : ", project_description);
};

const renderAddProjectPage = (req, res) => {
  res.render("project");
};

const renderContactMePage = (req, res) => {
  res.render("contact");
};

const renderTestimonialsPage = (req, res) => {
  res.render("testimonial");
};

module.exports = {
  renderIndexPage,
  handleNewProject,
  renderAddProjectPage,
  renderContactMePage,
  renderTestimonialsPage,
};
