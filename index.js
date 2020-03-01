const express = require("express")
const helmet = require("helmet")
const colors = require("colors")
const carRoutes = require('./cars/carsRoutes')

const server = express()
const port = 5000;

server.use(helmet())
server.use(express.json())

server.use("/cars", carRoutes)

server.use((err, req, res, next) => {
    console.log("error: ".red, err)
    res.status(500).json({errMessage: "Something went wrong"})
})

server.listen(port, () => {
    console.log(`Magic happening on port ${port}`)
})