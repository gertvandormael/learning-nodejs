require("../src/db/mongoose")
const Task = require("../src/models/task")

// Task.findByIdAndDelete("5de8ed2fb3de3423142ea4fb")
// 	.then(() => {
// 		console.log("User deleted")
// 		return Task.countDocuments({ completed: false })
// 	})
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	})

const deleteTaskAndCount = async id => {
	const task = await Task.findByIdAndDelete(id)
	const count = await Task.countDocuments({ completed: false })
	return count
}

deleteTaskAndCount("5de7d509fc0f26108c843ad8")
	.then(count => {
		console.log(count)
	})
	.catch(error => {
		console.log(error)
	})
