const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
	street : String,
	city : String
})


const userSchema = new mongoose.Schema({
	name : String , 
	age : {
		type : Number, 
		min : 1,
		max : 100,
		validate : {
			validator : v => v%2 === 0,
			message : props => `${props.value} is not an even number`
		}
	},
	email : {
		type : String , 
		minLength : 10,
		lowercase : true
		// uppercase too works
	},
	createdAt : {
		type : Date,  
		default : () => Date.now(),
		immutable : true
	},
	updatedAt : {
		type : Date , 
		default : () => Date.now()
	},
	bestFriend:{
		type : mongoose.SchemaTypes.ObjectId,
		ref : "User"
	},
	hobbies : [String],
	address : addressSchema
})

userSchema.methods.sayHi = function(){
	console.log(`Hi , My name is ${this.name}`)
	throw new Error("stop him")
} 

userSchema.statics.findByName = function(name){
	return this.where({ name : new RegExp(name , "i")}) // where can take same arguements as find too
}

userSchema.query.byName = function (name){ //apply to a query
	return this.where({ name : new RegExp(name , "i")})

}

userSchema.virtual('namedEmail').get(function(){
	return `${this.name} and ${this.email}`
})

// userSchema.pre('save' , function(next){
// 	this.updatedAt = Date.now()
// 	this.sayHi()
// 	next()
// })

// userSchema.post('save', function(doc , next){
// 	doc.sayHi()
// 	next()
// })


module.exports = mongoose.model("User" , userSchema)