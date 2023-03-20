const express=require("express");
const app=express();
const fs=require("fs");
const path=require("path");
console.log(__dirname);
// console.log(path.join(__dirname+"/index.html"))

app.use(express.static(__dirname ));
const alternateview=path.join(__dirname+"/viewii");
const partialpath=path.join(__dirname+"/partials");
console.log(alternateview);
const hbs=require("hbs");
hbs.registerPartials(partialpath);
app.set("view engine" , "hbs");
app.set("views" , alternateview);
app.get("/" , (req , res)=>{
    res.render("index");
});
app.get('/submit' , (req, res)=>
{
    res.send("hogya bhai submit");

})
app.listen(8000, ()=>{
    console.log("listinig by express");
})