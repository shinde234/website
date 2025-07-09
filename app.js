const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./model/User');
const app = express();

const port = 3000;

app.use(express());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI)
app.post('/submit', async(req, res)=>{
    const {name, age} = req.body;
    const user = new User({name, age});
    await user.save();
   res.send('User details saved to MongoDB Atlas!');
})

app.listen(port, ()=>{
    console.log('server is running ');
})
