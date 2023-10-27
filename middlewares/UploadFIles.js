const multer = require("multer");

const store = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "uploads");
  },

  filename: (req, file, callBack) => {
    callBack(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""));
  },
});

const upload = multer({
  storage: store,
});

module.exports = upload;
