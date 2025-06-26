const express = require("express");
const app = express();
const connectDb = require('./config/database')
const User = require('./models/user')

app.post('/signup', async (req, res) => {
    const user = {
        firstName: 'Gadurav',
        lastName: 'Rajdput',
        emailId: 'g@gdm.com',
        password: 'ga@gmdail.com'
    };

    try {
        const saveUser = User(user)
        await saveUser.save();
        res.status(200).send('User added successfully');
    } catch (error) {
        res.status(400).send('Error saving user to database',error.message);
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

