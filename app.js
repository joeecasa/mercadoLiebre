const express = require("express")
const path = require("path")
const app = express()
app.listen(3000,()=>console.log("servidor corriendo en 3000"))

app.use(express.static("public"));

app.get ("/",(req, res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

