import express from 'express';
import {Router} from 'express';
import * as everything from '../database/index';
import {pool} from '../database/connection';
export const adminRoute=Router();

adminRoute.get('/',(req,res)=>{

    res.send(`<h1>Welcome to Admin Page!!</h1> 
    You can Login In.
    Just Go to admin/login`)

});

adminRoute.post('/login',(req,res)=>{
   
    
    let adminUseremail:String="admin@gmail.com";
    let adminPassword:String="password";

    let {email,password}:{email:String,password:String}=req.body;

    if (email==adminUseremail && password==adminPassword){
        res.send("Login Successfull");
        

    }else{

        res.send("Access Denied!! Try again with valid credentials");
    }


});


adminRoute.get('/delete',async (req,res)=>{

    
    try{
        res.json(await everything.findAllData(1))
            }
            catch(err){
                res.status(500).send(err.message);
            }




});

adminRoute.get('/delete/:value',async (req,res)=>{
        let url:any=req.params.value;
        let client;
try{
                        
     if((Boolean(url>=0))==true){    
    
        client = await pool.connect();  
        const results = await client.query("delete from heroes where hero_id="+url );
    }

    else{
        client = await pool.connect();  
        const results = await client.query(`delete from heroes where hero_super_name ~*'${url}';`);
    } 
}      
                catch(err){
                    res.status(500).send(err.message);
                }
});
