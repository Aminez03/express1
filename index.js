const express = require("express");
const path=require("path")
const users=require("./api/list")
const app = express();


// app.get("/",(req,res)=>res.send("<h1>Hello Express Si Amin</h1>"))
// app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")))
// app.get("/about",(req,res)=>res.sendFile(path.join(__dirname,"public","about.html")))
app.use(express.static(path.join(__dirname,"public")))
app.get("/users/:id",(req,res)=>res.json(users.find(el=>el.id==req.params.id)))



const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is runing successfuly on port ${PORT}`)
);
