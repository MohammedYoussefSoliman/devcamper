const env = require("dotenv");
const express = require("express");
const colors = require("colors");
env.config({
  path: "./.env",
});
const app = express();

//barser
app.use(express.json());

const bootcampRoutes = require("./routes/bootcamp");
const connectDatabase = require("./utils/database");

const PORT = process.env.PORT || 7000;
const BASE_URL = process.env.BASE_URL;

app.use(BASE_URL + "/bootcamp", bootcampRoutes);
// app.get("/", (req, res) => {
//   res.send("devCamper app");
// });

connectDatabase();

const server = app.listen(
  PORT,
  console.log(BASE_URL + "/bootcamp".magenta.bold.underline)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  server.close(() => process.exit(1));
});
