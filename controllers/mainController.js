const path = require("path")

// asi lo haciamos antes con res.send
// let mainController = {
//     main :  (req, res) =>{
//         res.sendFile(path.join(__dirname,"../views/home.html"))
//     },

//     login :  (req, res) =>{
//         res.sendFile(path.join(__dirname,"../views/login.html"))
//     },
//     register : (req, res) =>{
//         res.sendFile(path.join(__dirname,"../views/register.html"))
//     }

//     }

let mainController = {
    main: (req, res) => {res.render("home")
    },

    login: (req, res) => {res.render("login")
    },

    register: (req, res) => {res.render("register")
    }



}

module.exports = mainController;