const express = require('express');
var mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser')

// initialize our express app
const port = 5000;
const app = express();
require('dotenv').config()
app.use(cors());
app.use(express.json()); // ata na dile server a undefined dekhabe, data asbe na. 
app.use(bodyParser.urlencoded({ extended: false }));


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



// app.get('/api', async(req, res)=>{
//   console.log('Hiii Body', req.body);
// })


app.post("/crud/insert", async(req, res)=>{
  const {name, director, date, price} = req.body;

  const SQLQuery =
   "INSERT INTO `movie_reviews`(`name`, `director`) VALUES (?,?)";

  dbConnectionConfig.query(SQLQuery, [name, director], (err, result)=>{
    console.log(err);
    if(err){
      console.log("Wrong")
    }else{
      console.log(result)
    }
  })

})


// app.get("/crud", (req, res) => {
//   const body = req.body;
//   res.send("getting data on Ui..", body);
// });








app.get("/", (req, res) => {
  res.send("Local database Working....");
});

app.listen(port, ()=>{
  console.log("Node Server running on", port)
})