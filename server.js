const express = require("express");
const app = express();

const port = 8000;
app.listen(port, function () {
  console.log(`port ${8000}`);
});

app.get("/", function (req, res) {
  const scriptPath = "./script.py";
  const spawn = require("child_process").spawn;
  // const process = spawn("python", [scriptPath]);
  const process = spawn("python3", [scriptPath]);
  process.stdout.on("data", function (data) {
    // res.send(data.toString());
    res.send({ result: data.toString() });
  });
});
