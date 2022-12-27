const { default: mongoose } = require("mongoose");
const app = require("./app");
const dbConn = require("./Config/dbConnect");
require("dotenv").config();

// db connect
dbConn()

// port
const port = process.env.PORT || 3005;

// server listen
app.listen(port, () => {
  console.log("server is running");
});
