import express from 'express';
import {Router} from 'express';
import * as everything from '../database/index';
export const userRoute=Router();
import {User} from '../model/user';
import bcrypt from 'bcryptjs';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import {verify} from './tokenVerification';



const app=express();




userRoute.get('/',(req,res)=>{
    
   

    res.send(`<h1>Welcome to Users Page!!</h1> 
                You can Login In or Register From here
                Just Go to user/login OR user/register to continue to page`);


});


userRoute.post('/register',async (req,res)=>{ 


    //Hashing password.
    const salt=await bcrypt.genSalt(10);


let{firstname,lastname,email,dateOfBirth}:{firstname:String,lastname:String,email:String,dateOfBirth:String}=req.body;
const hashedPassword=await bcrypt.hash(req.body.password,salt);
try{
    console.log(firstname+" "+hashedPassword) 
    let user:User= await everything.RegisterUser(new User(firstname,lastname,email,dateOfBirth,hashedPassword),res); 

    //res.status(201).json(user);
    res.send("Registration Complete");
}catch(err){

    res.status(500).send("Cannot Register You!!");
}
});


userRoute.post('/login',async (req,res)=>{

    

    let{email,password}:{email:string,password:string}=req.body;
    

    try{
        let user:any=await everything.CheckUser(email,password); 

        if(!user[0]){
res.send("Invalid email. Sorry!!");
        
        }else{

            const checkValue=await bcrypt.compare(password,user[0].password);

            if(checkValue==true){

               
                let accessedToken:any=process.env.SECRET_TOKEN;
                //creating token for successful login
                const token= jwt.sign({email:user[0].email},accessedToken);
                res.header('token',token).send(token);
                //res.send("Login successful!!!");
            }
            else{res.send("Invalid Password!! Try again!!");}


        }
        
    }catch(err){
        res.status(500).send(err.message);
    }

    });

    userRoute.get('/logout',verify,(req,res)=>{

        res.header('token',"").send("Logout Successful!! Thankyou for Visiting Superhero Zone")

        


    });









userRoute.get('/superhero/Specialheroes',verify,(req,res)=>{




});



userRoute.get('/superhero/Allheroes',verify,async (req,res)=>{

    

    try{
res.json(await everything.findAllData(0))
    }
    catch(err){
        res.status(500).send(err.message);
    }

});


userRoute.get('/superhero/:value',verify,async (req,res)=>{

    
    let url:any=req.params.value;


    try{
                if(url==""){
            console.log("Thank you");
                }

else if((Boolean(url>=0))==true){

    res.json(await everything.findDataById(url));
   
}

else{
    res.json(await everything.findDataByHero(url));
    
} 

            }

            catch(err){
                res.status(500).send(err.message);
            }

  
    });

    userRoute.get('/superhero/:value/image',verify,async (req,res)=>{

        console.log("hello world");

    
        let url:any=req.params.value;
    
    
        try{
                    if(url==""){
                console.log("Thank you");
                    }
                    
    
    else if((Boolean(url>=0))==true){
  

      // res.send(await everything.findImageById(url));

       let ab:any=await everything.findImageById(url);
          res.send(`<img src='../images/${ab[0].image}.jpg' width="500" height="600"'>`);
        }
        else{
            let ab:any=await everything.findDataByHero(url);
            res.send(`<img src='../images/${ab[0].image}.jpg' width="500" height="600"'>`);  
        }  
                    }
                    catch(err){
                        res.status(500).send(err.message);
                    }
            });


