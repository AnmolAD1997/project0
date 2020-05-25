
import express from 'express';
import { Router } from 'express';
import * as everything from '../database/index';
export const route=Router();
import {Hero} from '../model/hero'
import { json } from 'body-parser';




route.get('/',async (req,res)=>{

    res.send(`<h1>Hello Deepak Rai</h1>
    
                <div>From here you can view all the stuffs related to Superhero from the comics aand get their information.</div><br><br>
                <div>If you are User go to "localhost:3009/user" OR if you are Admin visit "localhost:3009/Admin"</div>
            `)

});

