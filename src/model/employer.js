const mongoose=require('mongoose');
const EmployerSchema=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	id:{
		type:Number,
		required:true
	},
	department:{
		type:String,
		required:true
	},
	address:{
		type:String,
		required:true
	}


	
}); 

const Employer=mongoose.model("Employer",EmployerSchema);
module.exports=Employer;