'Access-Control-Allow-Origin'
const express= require('express');
const route= express.Router();
const mypatt = require('../schimapattern/schima');


route.get("/getdata", async(req,res)=>{
    const alldata= await mypatt.find();
    res.json(alldata);
    console.log(alldata);
});

//get single data
route.get("/view/:id",async(req,res)=>{
    const{id} = req.params;
    const singleuser = await mypatt.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);
})

//post /create api
  route.post("/create",async(req,res)=>{
      const{ name, email, phone, city, gender, pass} = req.body;
      const adduser = new mypatt({
        name, email, phone, city, gender, pass});
      
      await adduser.save();
      res.status(200).json(adduser);
      console.log(adduser)
  });

  //delete data
  route.delete("/deleterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const a =await mypatt.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
  });

  //update data
  route.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await mypatt.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
  })



  //login page
   route.post("/login",async(req,res)=>{
    console.log(req.body);
    const {email,pass} = req.body;
     if(!email || !pass){
      return res.status(422).json({error:"user and phone dont match"});
     }
     else{
       const uservalidation = await mypatt.findOne({email:email});
      if(uservalidation.email===email && uservalidation.pass===pass)
     {
        res.status(200).json({message:'welcome',status: 201});
     }else{
        res.status(250).json({error:"Password not match"})
     }
    }
   });
  


module.exports = route


