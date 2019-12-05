require("../src/db/mongoose")
const Task = require("../src/models/task")

Task.findByIdAndDelete("5de8ed2fb3de3423142ea4fb")
	.then(() => {
		console.log("User deleted")
		return Task.countDocuments({ completed: false })
	})
	.then(result => {
		console.log(result)
	})
	.catch(error => {
		console.log(error)
	})