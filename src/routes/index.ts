
import express from 'express';
import { Router } from 'express';
import * as everything from '../database/index';
export const route=Router();
import {Hero} from '../model/hero'
import { json } from 'body-parser';


route.get('/Allheroes',async (req,res)=>{
    try{
res.json(await everything.findAllData(0))
    }
    catch(err){
        res.status(500).send(err.message);
    }

});


route.get('/:value',async (req,res)=>{

    
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

    route.get('/:value/image',async (req,res)=>{

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
        res.json(await everything.findDataByHero(url));
        
    } 
    
                }
    
                catch(err){
                    res.status(500).send(err.message);
                }
    
      
        });



