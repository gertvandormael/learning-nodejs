require("../src/db/mongoose")
const User = require("../src/models/user")

User.findByIdAndUpdate("5de8e81d87b2f22fa0ab697b", { age: 1 })
	.then(user => {
		console.log(user)
		return User.countDocuments({ age: 1 })
	})
	.then(result => {
		console.log(result)
	})
	.catch(error => {
		console.log(error)
	})
