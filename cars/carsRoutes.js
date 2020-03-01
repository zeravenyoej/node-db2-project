const express = require("express")
const route = express.Router()
const db = require('../data/config')

route.get("/", async (req, res, next) => {
    try {

        
    } catch(err) {
        next(err)
    }
})


// route.get("/:id", async (req, res, next) => {
//     const { id } = req.params
//     try {

        
//     } catch(err) {
//         next(err)
//     }
// })

// route.get("/post", async (req, res, next) => {
//     try {

        
//     } catch(err) {
//         next(err)
//     }
// })


module.exports = route