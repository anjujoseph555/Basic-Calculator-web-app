const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var op=req.body.operator;
  var result;
  switch(op){
    case "+":
            result=n1+n2;
            break;
    case "-":
            result=n1-n2;
            break;
    case "*":
            result=n1*n2;
            break;
    case "/":
            result=n1/n2;
            break;
    default:
           result="Oops! Enter appropriate operator";

  }
res.send("Result: "+result);
});
app.listen(3000,function(){
  console.log("Server set up and running on port 3000");
});
