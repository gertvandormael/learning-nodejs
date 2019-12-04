const mongoose = require("mongoose")
const validator = require("validator")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

// Mongoose model
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid")
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can't be 'password'")
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postive number")
      }
    }
  }
})

// Save to db with mongoose
const me = new User({
  name: "Gert     ",
  email: "vandormael.gert@gmail.com     ",
  password: "hunter2"
})

me.save().then(() => {
  console.log(me)
}).catch((error) => {
  console.log("Error", error)
})


// Mongoose model
const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const test = new Task({
  description: "test",
})

// Save to db with mongoose
test.save().then(() => {
  console.log(test)
}).catch((error) => {
  console.log(error)
})