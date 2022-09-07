const express = require("express");

const router = express.Router();

const app = express();

const PORT = 8080;
app.listen(PORT, () => {
  console.log("server running on port " + port);
});
