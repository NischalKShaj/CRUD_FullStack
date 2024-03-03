// importing the required files
const express = require("express");
const mongoose = require("./backend/server"); //establishing the database connection
const cors = require("cors");

// setting express as app
const app = express();

app.use(cors({ origin: "http://localhost:4000" }));

const port = 4000 || process.env.PORT;

// creating the port for the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
