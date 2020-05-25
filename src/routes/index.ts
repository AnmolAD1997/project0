
import express from 'express';
import { Router } from 'express';
import * as everything from '../database/index';
export const route=Router();
import {Hero} from '../model/hero'
import { json } from 'body-parser';


route.get('/',async (req,res)=>{

    res.send(`<h1>Hello Everyone 1..2..3..4..5..6..7..8..9.loading!!!</h1>
    
                <div>From here you can view all the stuffs related to Superhero from the comics aand get their information.</div><br><br>
                <div>If you are User go to "localhost:3009/user" OR if you are Admin visit "localhost:3009/Admin"</div>
            `)

});

