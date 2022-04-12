const express = require('express');
const app = express();
var mysql = require('mysql');

var port = 3001;

var dbConnectionConfig ={
    host: "localhost",
    user: "root",
    password: "", 
    database: "CRUD_Operation"
   }

var con = mysql.createConnection(dbConnectionConfig);
con.connect(function (error){
   if(error){
     console.log("Connection fail")  
   }else{
     console.log("mySQL Connected Successfull")  
   }
});



app.post("/crud/insert", async(req, res)=>{
  const body = req.body;
  const [moviName, director, date, price] = req.body;
  console.log("Hiting body", body);

  const SQLQuery = "INSERT INTO `movie_reviews`(`name`, `director`, `date`, `price`) VALUES (?,?,?,?)";

  dbConnectionConfig.query(SQLQuery, [moviName, director, date, price], (err, result)=>{
    if(err){
      console.log("Wrong")
    }else{
      console.log(result)
    }
  })

})








app.get("/", (req, res) => {
  res.send("Hi database");
});

app.listen(port, ()=>{
  console.log("Node Server running on", port)
})