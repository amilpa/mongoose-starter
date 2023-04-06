
const mongoose = require('mongoose')

const User = require('./user')

mongoose.connect("mongodb://localhost/testdb")

// const user = new User({ name : "Kyle" , age: 18})
// user.save()

async function run(){
	try {
		// const user = new User({
		// 	name: "Jose",
		// 	age: 26,
		// 	email: "Theworld2003@gmail.com",
		// 	hobbies: ["Weight lifting","Bowling"],
		// 	address : {
		// 		street : "Main st"
		// 	}
		// })
		// await user.save()
		// console.log(user)
		// await User.deleteMany({})

		//const user = await User.find()

		//const user = await User.where("name").equals("Kyle")

		// const user = new User({ name : "Subhash" , age: 20 , email : "amilpa2016@gmail.com"})

		// const user = await User.where("name")
		// 	.equals("Neeyetha")
		// 	.limit(1)
		// 	.populate("bestFriend")

		// const user = await User.find().byName("Neeyetha")

		const user = await User.where("name").equals("Rajesh").limit(1)
		
		user[0].name = "Rajesh"
		user[0].save()
		console.log(user)
		// user[0].sayHi()

		// const user = new User({ name : "Neeyetha" , age : "22" })

		// user[0].bestFriend = "642eb75caf3bd22d9324b787"
		// user[0].save()
		// user.save()
	}
	catch (e) {
		console.log(e.message)
	}
}

run()

