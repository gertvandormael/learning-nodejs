

const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

// SHORTHAND object descturcturing
// const { MongoClient, ObjectID } = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log("Unable to connect to database")
		}

		const db = client.db(databaseName)

		//-----------------CREATE-----------------
		// db.collection("users").insertOne({
		//   name: "Vikram",
		//   age: 26
		// }, (error, result) => {
		//   if (error) {
		//     return console.log("Unable to insert user")
		//   }

		//   console.log(result.ops)
		// })

		// db.collection("users").insertMany(
		// 	[
		// 		{
		// 			name: "Jen",
		// 			age: 28
		// 		},
		// 		{
		// 			name: "Gunther",
		// 			age: 27
		// 		}
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log("Unable to insert documents")
		//     }

		// 		console.log(result.ops)
		// 	}
		// )

		//-----------------READ-----------------
		// db.collection("users").findOne({ _id: new ObjectID("5de78c2e5bdfbf023cbb582f") }, (error, user) => {
		//   if (error) {
		//     return console.log("Unable to fetch user")
		//   }

		//   console.log(user)
		// })

		// db.collection("users").find({ age: 29 }).toArray((error, users) => {
		//   console.log(users)
		// })

		// db.collection("users").find({ age: 29 }).count((error, count) => {
		//   console.log(count)
		// })

		//-----------------UPDATE-----------------
		// db.collection("users").updateOne(
		// 	{
		// 		_id: new ObjectID("5de77f647216831d605775a0")
		// 	},
		// 	{
		// 		$inc: {
		//       age: 1
		//     }
		// 	}
		// ).then((result) => {
		//   console.log(result)
		// }).catch((error) => {
		//   console.log(error)
		// })

		// db.collection("tasks").updateMany(
		// 		{
		// 			completed: false
		// 		},
		// 		{
		// 			$set: {
		// 				completed: true
		// 			}
		// 		}
		// 	).then(result => {
		// 		console.log("Updated to true")
		// 	}).catch(error => {
		// 		console.log(error)
		//   })

		//-----------------DELETE-----------------
		// db.collection("users")
		// 	.deleteMany({
		// 		age: 27
		// 	})
		// 	.then(result => {
		// 		console.log(result)
		// 	})
		// 	.catch(error => {
		// 		console.log(error)
		// 	})

		// db.collection("tasks")
		// 	.deleteOne({
		// 		description: "task 3"
		// 	})
		// 	.then(result => {
		// 		console.log(result)
		// 	})
		// 	.catch(error => {
		// 		console.log(error)
		// 	})
	}
)
