import {Pool} from 'pg';

export const pool= new Pool({

host:"project0.c0ftwtumnrai.us-east-2.rds.amazonaws.com",
port:5432,
database:"postgres",
user:"project0",
password:"project0"
});


