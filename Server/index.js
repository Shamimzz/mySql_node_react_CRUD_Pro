const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser')

// initialize our express app
const port = 5000;
const app = express();
require('dotenv').config()
app.use(cors());
// ata na dile server a undefined dekhabe, data asbe na. 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


var Db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "", 
    database: "crud_operation"
   });



// Insert all data from Client........   
app.post("/crud/insert", async(req, res)=>{
  const {name, director, date, price} = req.body;
  // console.log(name, director);

  const SQLQuery =
   "INSERT INTO movie_reviews (name, director, date, price) VALUES (?,?,?,?)";

  Db.query(SQLQuery, [name, director, date, price], (err, result)=>{
    if(err){
      console.log("Wrong")
    }else{
      console.log(result)
    }
  })

})



// Select all data from database........
app.get("/features", (req, res) => {
  console.log("Hitting body", req.body);

  const SQLQuery = "SELECT * FROM movie_reviews";

  Db.query(SQLQuery, (err, result)=>{
    if(err){
      console.log("Wrong")
    }else{
      console.log(result);
      res.send(result);
    }
  })


});











// Database Listing......
app.get("/", (req, res) => {
  res.send("Local database Working....");
});

app.listen(port, ()=>{
  console.log("Node Server running on", port)
})