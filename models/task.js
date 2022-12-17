const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Kindly provide a name"],
    trim: true, //Trims white spaces in the string
    maxlength: [50, "Name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const taskModel = mongoose.model("Task", TaskSchema);

module.exports = taskModel;
