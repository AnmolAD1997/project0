import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

export function verify(req:any,res:any,next:any){

    const token =req.header('token');
    if(!token){

        return res.status(401).send('Access Denied');

    }

    try{

        let secret:any=process.env.SECRET_TOKEN;
        
        const verified=jwt.verify(token,secret);
        req.user=verified;
        next();
    }catch(e){
        
        res.status(400).send("Invalid Token");

    }

    
}