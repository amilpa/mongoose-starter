
const mongoose = require('mongoose')

const User = require('./user')

mongoose.connect("mongodb://localhost/testdb")

const user = new User({ name : "Kyle" , age: 18})
user.save()

async function run(){
	const user = new User({ name : "Amil" , age : 26 })
	await user.save()
}

run()

