require('dotenv').config()
var express = require('express')
var app = express();
var port = process.env.PORT || 2000;


app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
})