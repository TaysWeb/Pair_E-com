import {createPool} from 'mysql2';
import "dotenv/config"
   
// create the connection to database
const db = createPool({
  host: process.env.DB_HOST,
  user:  process.env.DB_USER,
  password: process.env.DB_PASS,
  database:  process.env.DB_NAME,
  connectionLimit : 30
});
  
db.getConnection((err) => {
  if (!err) {
     return err ;
  } 
  console.log("connected successful !")
});


export default db;
