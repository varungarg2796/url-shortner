const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const shortid = require('shortid');
const urlExist = require("url-exist");
require('dotenv').config();
const app = express();

app.use(express());
app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser:true
        });
        console.log('Connected to the DB');
    } catch (err){
        console.log('NOT CONNECTED' + err);
    }
}

connectDB();

app.listen('4000', () => {
    console.log('listening on 4000');
})