const mongoose = require("mongoose");
const DATABASE_URI = process.env.DATABASE_URI;

const connectDatabase = async () => {
  const connection = await mongoose.connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected at" + connection.connection.host.blue.bold.underline);
};

module.exports = connectDatabase;
