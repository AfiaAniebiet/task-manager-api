const mongoose = require("mongoose");

// mongoose
//   .connect(MONGODB_URI)
//   .then(() => {
//     console.log("Connected to the Database");
//   })
//   .catch((error) => {
//     console.log("Failed to connect to Databse", error);
//   });

const MONGODB_CONNECTION = (MONGODB_URI) => {
  mongoose.set("strictQuery", false);
  mongoose.connect(MONGODB_URI);

  mongoose.connection.on("connected", () => {
    console.log("Connected to Database");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Failed to connect to Database", error);
    console.log(error);
  });
};

module.exports = {
  MONGODB_CONNECTION,
};
