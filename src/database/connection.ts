import {Pool} from 'pg';

export const pool= new Pool({

host:"localhost",
port:5432,
database:"project0",
user:"anmol",
password:"anmol"
});


