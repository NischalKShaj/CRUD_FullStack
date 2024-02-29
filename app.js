// importing the required files
const express = require("express");
const mongoose = require("./backend/server"); //establishing the database connection

// setting express as app
const app = express();

// creating the port for the server
app.listen(4000, () => {
  console.log("server connected successfully at port 4000");
});
