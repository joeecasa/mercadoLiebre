const express = require("express")
const path = require("path")
const app = express()

//configurando EJS
app.set('view engine', 'ejs')

//definiendo puerto y levantar servidor
const puerto = 3030
app.listen(process.env.PORT || puerto, ()=>console.log("servidor corriendo en " + puerto))


//configuracion para montar en heroku
const publicPath = path.resolve(__dirname,'./public')
app.use(express.static(publicPath));

//rutas
const rutasMain = require ("./routes/main")
app.use("/", rutasMain)





// app.get("/",(req, res) =>{
//     res.sendFile(path.join(__dirname,"/src/views/home.html"))
// })

// app.get("/registro",(req, res) =>{
//     res.sendFile(path.join(__dirname,"src/views/register.html"))
// })

// app.get("/login",(req, res) =>{
//     res.sendFile(path.join(__dirname,"src/views/login.html"))
// })

// app.post("/",(req, res) =>{
//     res.sendFile(path.join(__dirname,"src/views/home.html"))
// })


