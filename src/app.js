const express = require("express");
const app = express();

const { adminAuth, userAuth } = require('./middlewares/auth')

app.use("/admin", adminAuth);

app.get('/admin/user', (req, res) => {
    res.send('user Data fetched ')
})

app.get("/user/data", userAuth, (req, res) => {
    res.send('user Data fetched ')

})




app.listen(7777, () => {
    console.log("server is successfully run on port 7777")
})