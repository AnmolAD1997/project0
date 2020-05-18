import express from 'express';
import {Router} from 'express';
import * as everything from '../database/index';
export const userRoute=Router();
import {User} from '../model/user';


userRoute.get('/',(req,res)=>{

    res.send(`<h1>Welcome to Users Page!!</h1> 
                You can Login In or Register From here
                Just Go to user/login OR user/register to continue to page`);


});


userRoute.post('/register',async (req,res)=>{ 
let{firstname,lastname,email,dateOfBirth,password}:{firstname:String,lastname:String,email:String,dateOfBirth:String,password:String}=req.body;

try{
    console.log(firstname+" "+lastname) 
    let user:User= await everything.RegisterUser(new User(firstname,lastname,email,dateOfBirth,password),res); 

    //res.status(201).json(user);
    res.send("Registration Complete");
}catch(err){

    res.status(500).send("Cannot Register You!!");
}
});


userRoute.post('/login',async (req,res)=>{

    
    let{email,password}:{email:String,password:String}=req.body;



    try{
        let user:any=await everything.CheckUser(email,password); 

        console.log(user[0]);
        let detail=user[0];
        if(user[0]){
            res.send(`Hello ${detail.firstname}  ${detail.lastname} 
            You Are now Logged IN`);
        }else{
            console.log("Accesss Denied");
        }
        
        
    }catch(err){
        res.status(500).send(err.message);
    }

    });









userRoute.get('/Specialheroes',(req,res)=>{




});

