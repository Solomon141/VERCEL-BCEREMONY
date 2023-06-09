const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const PORT = 3010;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const lookup_routes = require("./Controllers/LookupController");
app.use("/lookup", lookup_routes);
const Register_routes = require("./Controllers/Register");
app.use("/user", Register_routes);

app.listen(process.env.PORT || PORT , (req, res) => {
  console.log(`connected to port ${process.env.PORT}`);
});