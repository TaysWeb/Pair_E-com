
// import express
import express  from "express";

// import cors
import cors from  "cors" ;
 
import bodyParser from  "body-parser" ;
 
// import routes
import Router  from  "./routes/routes.js";

// const express = require('express') ;
// import  path from 'path' ;
  
// init express
const app = express();
  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
app.get('/', function(req, res){
    res.json({ message: 'Welcome to restaurant api' });
});
// use router
app.use(Router);
  
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
