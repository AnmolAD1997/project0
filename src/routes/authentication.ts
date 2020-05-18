import { Router } from 'express';
export const route=Router();

console.log('hello');

route.post('/admin',(req,res)=>{

    res.send('LoggedIn as Admin');
 
});

route.post('/user',(req,res)=>{

    res.send('LoggedIn as User');
 
});









