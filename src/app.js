const express = require("express");
const app = express();

app.use("/",(req,res)=>{
    res.send('hello from the Dashboard ')
})
app.use("/gaurav",(req,res)=>{
    res.send('hello from the server ')
})

app.listen(3000, () => {
  console.log("surver is successfully listing on port  3000");
});
