const express = require("express");
const app = express();



// This can only handle the get api calls 
app.get("/user",(req,res)=>{
  res.send({firstName:"Gaurav",lastName:'Rajput'})
})
app.post("/user",(req,res)=>{
  res.send('Data successfully save to the database ')
})
app.delete("/user",(req,res)=>{
  res.send('Data successfully deleated to the database ')
})

app.use("/",(req,res)=>{
    res.send('hello from the Dashboarddddddddddddddddddddddddddddddddddddd ')
})
app.use("/gaurav",(req,res)=>{
    res.send('hello from the server ')
})

app.listen(3000, () => {
  console.log("surver is successfully listing on port  3000");
});
