const express = require("express")
const path = require("path")
const app = express()
const puerto = 3000
app.listen(process.env.PORT || puerto, ()=>console.log("servidor corriendo en " + puerto))

app.use(express.static("public"));

// app.use("/static",express.static(__dirname,))

app.get("/",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get("/registro",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
})

app.get("/login",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.post("/",(req, res) =>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})


