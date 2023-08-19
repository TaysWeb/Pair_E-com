import mysql from 'mysql2';
   
// create the connection to database
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user:  process.env.DB_USER,
  password: process.env.DB_PASS,
  database:  process.env.DB_NAME,
  connectionLimit : 10
});
  
db.getConnection((err) => {
  if (!err) {
     return err ;
  } 
  console.log("connected successful !")
});


export default db;
