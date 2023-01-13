const express = require("express");
var server=express();
const bodyparser=require("body-parser")
const mongoose = require("mongoose");
var path = require("path");
const routes=require('./router/routes')


mongoose.Promise=global.Promise;

const url ='mongodb://0.0.0.0:27017/StudentDB';

mongoose.connect(url,{
    connectTimeoutMS:1000
},function(err,result){
    if(err){
        console.log("error connecting studentdb database");
        console.log(err);
    }
    else{
        console.log("successfully connected to studentdb database");
    }
} )

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({
    extended:true
}))

server.use(express.static(path.join(__dirname,"public")));

server.use(function(req,resp,next){
    resp.setHeader('Access-Control-Allow-origin','*');
    resp.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    resp.setHeader('Access-Control-Allow-Credentials','true');
    resp.setHeader('Access-Control-Allow-Headers','Content-type');
    resp.setHeader('Access-Control-Request-Method','POST,PUT');
    next();
})


server.use('/',routes);
server.listen(4000);
console.log("server listening on port 4000")
module.exports=server;