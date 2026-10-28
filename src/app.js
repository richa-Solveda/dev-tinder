const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();
const PORT = 3000;

app.use('/admin', adminAuth);


app.use('/admin/getalldata', (req, res, next)=>{
    res.send('all data sent to the server');
})

app.listen((PORT), ()=>{
    console.log('app is running on port: ', PORT)
});