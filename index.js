#! Node
const fs = require("fs");

const allFiles = fs.readdirSync("./");

allFiles.forEach(file => {
  const fileInfo = fs.statSync(file);
  if (fileInfo.isDirectory()) {
    return;
  }
  const creatTime = fileInfo.atime.getFullYear() + "-" + fileInfo.atime.getMonth();
  const path = "./" + creatTime;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  fs.renameSync("./" + file, path + "/" + file);
});
