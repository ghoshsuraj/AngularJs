var express=require('express');
var app=express();
var path = require('path');
app.use(express.static('public'));
// var path = require('path');
// app.get('/',function(req,res){ 

// res.sendFile(path.join(__dirname + '/temp12.html'));
// });


// app.get('/public/css/temp12.css',function(req,res){ 

// res.sendFile(path.join(__dirname + '/public/css/style.css'));
// });


// app.get('/home1',function(req,res){
//   res.sendFile('/home1.html');
// });
app.listen(8000);

