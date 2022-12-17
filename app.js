const express = require("express");
const app = express();
const { MONGODB_CONNECTION } = require("./db/connect");
require("dotenv").config();
const errorHandler = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const taskRoute = require("./routes/tasks");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", taskRoute);
app.use(errorHandler);
app.use(errorHandlerMiddleware);

const port = proces.env.PORT || 3000;

const start = async () => {
  try {
    MONGODB_CONNECTION(process.env.MONGODB_URI);
    app.listen(port, console.log(`Server listening on Port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
