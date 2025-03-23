const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use("/test", express.static(path.join(__dirname, "../../dist/test")));
app.use("/video", express.static(path.join(__dirname, "../../dist/video")));

app.get("/test/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/test/index.html"));
});
app.get("/video/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/video/index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
