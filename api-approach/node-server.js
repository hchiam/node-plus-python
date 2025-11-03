const express = require("express");
const axios = require("axios");

const app = express();

const port = 8001;
const pythonApiUrl = "http://localhost:5000";

app.listen(port, function () {
  console.log(`port ${port}`);
});

app.get("/", async function (req, res) {
  try {
    // get data:
    const response = await axios.get(`${pythonApiUrl}/api/message`);

    // show response:
    res.send({ result: response.data.message });
  } catch (error) {
    console.error("Error calling Python API:", error.message);
    res.status(500).send({ error: "Failed to call Python API" });
  }
});

app.get("/process", async function (req, res) {
  try {
    // post data:
    const data = req.query.data || "default value";
    const response = await axios.post(`${pythonApiUrl}/api/process`, { data });

    // show response:
    res.send({ result: response.data.result });
  } catch (error) {
    console.error("Error calling Python API:", error.message);
    res.status(500).send({ error: "Failed to call Python API" });
  }
});
