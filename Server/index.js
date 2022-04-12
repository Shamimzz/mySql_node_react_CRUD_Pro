const express = require('express');
const app = express();
var mysql = require('mysql');

var port = 3001;

var DatabaseConnectionConfig ={
    host: "localhost",
    user: "root",
    password: "", 
    database: "CRUD_Operation"
   }

var con = mysql.createConnection(DatabaseConnectionConfig);
con.connect(function (error){
   if(error){
     console.log("Connection fail")  
   }else{
     console.log("mySQL Connected Successfull")  
   }
});



function InsertData() {
  const SQLQuery = "INSERT INTO `movie_reviews`(`Id`, `name`, `director`, `date`, `price`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]')"

  


}












app.get("/", (req, res) => {
  res.send("Hi database");
});

app.listen(port, ()=>{
  console.log("Node Server running on", port)
})