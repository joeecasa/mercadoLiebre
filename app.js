const express = require("express")
const path = require("path")
const app = express()
app.listen(3000,()=>console.log("servidor corriendo en 3000"))

app.use(express.static("public"));

// app.use("/static",express.static(__dirname,))

app.get ("/",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.get ("/registro",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/register.html"))
})

app.get ("/login",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.post ("/",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})


