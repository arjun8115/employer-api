const express=require('express');
const app=express();
const Employer =require('./model/employer');
const mongoose=require('mongoose');
const url=require('../config/config').mongoUrl;

port=process.env.PORT || 5000;

mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
	console.log('Connteced To Database');
})
.catch(err=>console.log(err)
);
app.use(express.urlencoded({extended:false}));

app.use(express.json());
app.get('/',(req,res)=>{
Employer.find({}).then((err,employer)=>{
if(err){
	res.send(err);
}
res.json(employer);
});
});

app.post('/add',(req,res)=>{
	Employer.findOne({name:req.body.name},(err,employer)=>{
		if(err){
			res.send(err);
			return;
		}
		if(employer!=null){
			res.status(400).send({msg:"Employer Already Exists"});
			return;
		}

		var employer=new Employer();
			employer.name=req.body.name;
			employer.id=req.body.id;
			

		

		employer.save(function(err){
			if(err)
			{
				res.send(err);
				return;
			}
			res.json({msg:"Employer Record Saved"});
		});
	});
});

app.put('/update',(req,res)=>{

	Employer.findOne({id:req.body.id},(err,employer)=>{
		if(err){
			res.send(err);
		}
		if(employer==null){
			res.status(400).send({msg:"Employer Do not Exist"});
			return ;
		}
			employer.name=req.body.name;
			employer.id=req.body.id;
			

		employer.save(function(err){
			if(err)
			{
				res.send(err);
			}
			res.json({msg:"Employer Record Updated Successfully"});
		});
	});
});

app.delete('/remove',(req,res)=>{
	Employer.findOneAndDelete({id:req.body.id}).then((employer)=>{

		if(employer==null){
			res.status(404).send("Data Not Found");
			return;
			
		}
			res.json({msg:"Employer Record Deleted Successfully"});
		});
	});



app.listen(port,()=>{
console.log(`Server Started  at ${port}`);
});

