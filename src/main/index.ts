import {PORT} from './connection';
import express from 'express';
import {route} from '../routes/index'
import {userRoute} from '../routes/users';
import {adminRoute} from '../routes/admin';
import bodyParser from 'body-parser';

const app=express();

//app.use(express.urlencoded({ extended: true }))

app.use(bodyParser());



app.use('/heroes',route);
app.use('/user',userRoute);
app.use('/admin',adminRoute);



  
app.listen(PORT,()=>{

    console.log("Server Created at Port Number is :"+ PORT);
});




