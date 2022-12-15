const express = require("express");
const app = express();
const { MONGODB_CONNECTION } = require("./db/connect");
require("dotenv").config();

const taskRoute = require("./routes/tasks");

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task manager App");
});

app.use("/api/v1/tasks", taskRoute);

const port = 3000;

const start = async () => {
  try {
    MONGODB_CONNECTION(process.env.MONGODB_URI);
    app.listen(port, console.log(`Server listening on Port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
