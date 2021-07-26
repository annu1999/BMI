const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/index.html");
});
app.post("/index.html",function(req,res)
{
  var h=parseFloat(req.body.h1);
  var w=parseFloat(req.body.w1);
  var result=w/(h*h);
  res.send("Your BMI is "+result);
});
app.listen(3000,function()
{
  console.log("Starting on srever");
})
