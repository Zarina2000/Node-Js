const express=require('express');
const path=require('path');
const parser=require('body-parser');
const app=express();

app.use(parser.urlencoded({extended:false}));
app.use('/static',express.static(path.join(__dirname,'static')));
// app.use("/",(req,res,next)=>{
//     console.log("Request received");
//     next();
// });
// app.use("/",(req,res,next)=>{
//     console.log("Request received in2nd middleware");
//     next();
// });
app.get("/",(req,res)=>{
    // //res.send("Hi from express app!");
    // res.json({
    //     status:'Success'
    // })
    var loc=path.join(__dirname,'views','index.html');
    res.sendFile(loc);
});
app.get("/about",(req,res)=>{
    res.send("About us page");
});
app.get("/employee/create",(req,res)=>{
    var loc=path.join(__dirname,'views','index.html');
    res.sendFile(loc);
});
app.post("/employee/create",(req,res)=>{
    console.log(req.body);
    res.json(req.body);
});
app.listen(80)
