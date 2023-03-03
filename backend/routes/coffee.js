const express = require("express")

const coffeeRouter = express.Router()

coffeeRouter.post('/create', (req, res) => {

    return res.json('Create coffee route')
})

coffeeRouter.delete('/delete/:id', (req, res) => {
    const id = req.params.id

    return res.json(`Coffee with id of ${id} successfully deleted`)
})

coffeeRouter.get('/ping', (req, res) => {
    return res.json({ "status": "good" })
})

coffeeRouter.get('/:id', (req, res) => {
    const id = req.params.id
    return res.json(`Coffee ID: ${id}`)
})

coffeeRouter.get('/', (req, res) => {
    return res.json("Coffee Route")
})

module.exports = { coffeeRouter }
