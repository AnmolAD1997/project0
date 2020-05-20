
import express from 'express';
import {route} from '../routes/index'
import {userRoute} from '../routes/users';
import {adminRoute} from '../routes/admin';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();




const app=express();

//app.use(express.urlencoded({ extended: true }))

app.use(bodyParser());




//app.use('/heroes',route);
app.use('/user',userRoute);
app.use('/admin',adminRoute);



const PORT=process.env.PORT;
app.listen(PORT,()=>{

    console.log("Welcome to this WebServer.")
    console.log("Server Created at Port Number is :"+ PORT);

    


});




