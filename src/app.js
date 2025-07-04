const express = require("express");
const app = express();
const connectDb = require('./config/database')
const User = require('./models/user')

app.use(express.json())

app.post('/signup', async (req, res) => {
    
    //Creating new instance of user model
    const user = new User(req?.body)

    try {
        await user.save()
        res.status(200).send('User added successfully');
    } catch (error) {
        res.status(400).send('Error saving user to database', error.message);
    }
});


connectDb().then(() => {
    console.log("Database connection established")
    app.listen(7777, () => {
        console.log("server is successfully run on port 7777");
    })
}).catch(err => {
    console.log("Error on connecting Database !")
})

