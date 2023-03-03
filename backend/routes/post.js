import express from "express"

const postRouter = express.Router()


postRouter.get("/", (req, res) => {
    return res.json("Post Route")
})

export { postRouter }
