// requiring the dependencies
const express = require("express");
const route = express.Router();

exports.getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log({ email, password });
    res.status(200).json({ message: "Login request received" });
  } catch (error) {
    console.error(erorro);
  }
};
