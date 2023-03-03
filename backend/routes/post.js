import express from "express"

const postRouter = express.Router()

postRouter.post('/', (req, res) => {
    return res.json('Create post route')
})

postRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    return res.json(`Post with id ${id} successfully deleted`)
})

postRouter.get("/ping", (req, res) => {
    return res.json({ "status": "good" })
})

postRouter.get("/:id", (req, res) => {
    const id = req.params.id

    return res.json(`Post id: ${id}`)
})

postRouter.get("/", (req, res) => {
    return res.json("Post Route")
})

export { postRouter }
