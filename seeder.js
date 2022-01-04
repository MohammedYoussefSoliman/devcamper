const fs = require("fs");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});
// database
const connectDatabase = require("./utils/database");
// models
const Bootcamps = require("./models/Bootcamps");
// seeder data
const bootampsData = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);
connectDatabase();

async function importData() {
  try {
    await Bootcamps.create(bootampsData);
    console.log("seeder imported bootCamps".green.inverse);
    process.exit();
  } catch (error) {
    console.log("seeder failed to import bootcamps".red.inverse);
  }
}

async function destroyData() {
  try {
    await Bootcamps.deleteMany();
    console.log("seeder destroyed bootCamps".red.inverse);
    process.exit();
  } catch (error) {
    console.log("seeder failed to destroy bootcamps".red.inverse);
  }
}

if (process.argv[2] === "-i") importData();
if (process.argv[2] === "-d") destroyData();
