import {pool} from './connection';
import {Hero} from '../model/hero';
import {convertToHeroArray} from '../dto/heroesDTO';
import { User } from '../model/user';


export async function findAllData(a:Number):Promise<Hero[]>{
    let client;
    try{
        client = await pool.connect();
        if(a==0){
        const results = await client.query("select * from heroes JOIN origins on heroes.origin=origins.origin_id" );
        let result=results.rows.map(convertToHeroArray);
        return result;
    }
    else{
        const results = await client.query("select hero_id,hero_super_name from heroes JOIN origins on heroes.origin=origins.origin_id" );
        let result=results.rows.map(convertToHeroArray);
        return result;
    }
       
       
       



    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return [];
}


export async function findDataByHero(url:any):Promise<Hero[]>{
    let client;
    try{
        console.log(url);
        client = await pool.connect();
        console.log(url);
        const results = await client.query(`select * from heroes JOIN origins on heroes.origin=origins.origin_id where hero_super_name ~*'${url}';`);
        console.log(url);
       let result=results.rows.map(convertToHeroArray);
       console.log(url);2
       return result;
    


    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return [];
}

export async function findDataById(url:any):Promise<Hero[]>{
    let client;
    try{
        client = await pool.connect();
        
        const results = await client.query("select * from heroes JOIN origins on heroes.origin=origins.origin_id where hero_id="+url );
        
       let result=results.rows.map(convertToHeroArray);
       
       return result;

       



    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return [];
}


export async function RegisterUser(userInput:User,res:any){

    let client;
    let newUser=new User("","","","","");
   
    try{
        client = await pool.connect();
        console.log(userInput);
        console.log("printed. Value ");
        const result=await client.query(`INSERT INTO users(firstname,lastname,email,date_of_birth,password)
                                        VALUES($1,$2,$3,$4,$5);`,
                        [userInput.firstname,userInput.lastname,userInput.email,userInput.dateOfBrith,userInput.password]);
                        
        newUser=userInput;
        //console.log(newUser+" /br New User it is");

    }catch(err){
        console.log(err);
        res.send("Registration Failed");



    }finally{client &&client.release();}

    return newUser;

}

export async function CheckUser(user:String,password:String){

    let client;

    console.log(user+"  "+password);

    try{
        client = pool.connect();
        const result= (await client).query(`SELECT firstname,lastname,email FROM users WHERE PASSWORD='${password}' AND email~*'${user}';`);
        let a=(await result).rows;
    
            return a;

        }
             
    catch(err){

        console.log(err);


    }finally{client &&(await client).release();}


}

export async function findImageById(url:any):Promise<Hero[]>{
    let client;
    try{
        client = await pool.connect();
        
        const results = await client.query("select * from heroes JOIN origins on heroes.origin=origins.origin_id where hero_id="+url );
        
       let result=results.rows.map(convertToHeroArray);
       
       return result;

       



    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return [];
}







