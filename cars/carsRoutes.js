const express = require("express")
const route = express.Router()
const db = require('../data/config')

route.get("/", async (req, res, next) => {
    try {
        const cars = await db("cars")
        res.json(cars)
    } catch(err) {
        next(err)
    }
})


route.get("/:id", async (req, res, next) => {
    const { id } = req.params
    try {
        //the FIRST returns a single object, as opposed to an array with one object
        const car = await db("cars").where({id: id}).first()
        res.json(car)
    } catch(err) {
        next(err)
    }
})

route.post("/", async (req, res, next) => {
    try {
        const { VIN, make, model, mileage } = req.body
        if (!VIN || !make || !model || !mileage) {
            return res.status(400).json({message: "Need VIN, make, model, and mileage please"})
        }

        const [id] = await db("cars").insert(req.body)
        const newCar = await db("cars").where({id: id}).first()
        res.status(201).json(newCar)
    } catch(err) {
        next(err)
    }
})


module.exports = route