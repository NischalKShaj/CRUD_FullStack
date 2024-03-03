// importing the required files
const express = require("express");
const mongoose = require("./backend/server"); //establishing the database connection
const cors = require("cors");
const bodyPaser = require("body-parser");
const userRoute = require("./backend/routes/userRoute/user");

// setting express as app
const app = express();

app.use(bodyPaser.json());

app.use(cors({ origin: "http://localhost:4000" }));

const port = 4000 || process.env.PORT;

app.use("/", userRoute);

// creating the port for the server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
