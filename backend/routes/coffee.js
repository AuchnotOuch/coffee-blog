import express from "express"

const coffeeRouter = express.Router()

coffeeRouter.get('/', (req, res) => {
    return res.json("Coffee Route")
})

export { coffeeRouter }
