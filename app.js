const express = require("express");

const app = express();

const config = express.config();

const PORT = 8080;
app.listen(PORT, () => {
  console.log("server running on port " + port);
});
