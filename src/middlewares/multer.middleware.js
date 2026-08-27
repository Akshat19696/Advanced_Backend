import multer from "multer";
//we are going to use disk storage just copied the code from the multer library in github docs
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); ///ye chng kiya hu temporary disk pe is destination pe file ayega jub apne node sevrer pe upload hoga
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, function (err, raw) {
      if (err) return cb(err);
      cb(null, file.originalname); //file apni orignal name se store hoga file ke age . ke baad ctrl+space use krke opt check kiya
    });
  },
});

export const upload = multer({ storage });
