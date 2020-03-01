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
        
        //In order for the put request to work below, I have to make a payload variable instead of 
        //passing in req.body as a param insert. Apparently this is the only way to generate an ID?
        //WHY???
        const payload = {
            VIN: req.body.VIN, 
            make: req.body.make, 
            model: req.body.model,
            mileage: req.body.mileage
        }

        const [id] = await db("cars").insert(payload)
        const newCar = await db("cars").where({id: id}).first()
        res.status(201).json(newCar)
    } catch(err) {
        next(err)
    }
})

route.put("/:id", async (req, res, next) => {
    try {
        const payload = {
            VIN: req.body.VIN, 
            make: req.body.make, 
            model: req.body.model,
            mileage: req.body.mileage
        }
        const { id } = req.params

        await db("cars").where({id: id}).update(payload)
        const updatedCar = await db("cars").where({id: id}).first()
        res.json(updatedCar)
    } catch(err) {
        next(err)
    }
})

route.delete("/:id", async (req, res, next) => {
    try {
        await db("cars").where({id: req.params.id}).del()
        res.status(204).json({message: "Successfully deleted"})
    } catch(err) {
        next(err)
    }
})



module.exports = route