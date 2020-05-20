//importing important component
import express from 'express';
import {route} from '../routes/index'
import {userRoute} from '../routes/users';
import {adminRoute} from '../routes/admin';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config();

const app=express();


//for parsing the json data from the user to the readable format
app.use(bodyParser());



//All the routing stuffs
app.use('/',route);
app.use('/user',userRoute);
app.use('/admin',adminRoute);



const PORT=process.env.PORT;
app.listen(PORT,()=>{

    console.log("Welcome to this WebServer.")
    console.log("Server Created at Port Number is :"+ PORT);

    


});




