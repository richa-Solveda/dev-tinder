const express = require("express");

const app = express();
const PORT = 3000;

app.use("/", (req, res)=>{
    res.send("hello from home page server !!")
})

app.use((req, res)=>{
    res.send("hello from express !!")
})
app.listen((PORT), ()=>{
    console.log('app is running on port: ', PORT)
});