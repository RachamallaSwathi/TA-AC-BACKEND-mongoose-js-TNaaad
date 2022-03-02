var express=require('express');
var mongoose=require('mongoose');

var app=express();

//connect to database
mongoose.connect("mongodb://127.0.0.1:27017/sample", (err) => {
    console.log(err ? err : "Connected to database");
});



app.listen(2000,()=>{
    console.log('server is listening at port 2k');
})