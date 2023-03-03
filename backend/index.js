import express from "express"
import { coffeeRouter } from "./routes/coffee.js"
import { postRouter } from "./routes/post.js"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use('/coffee', coffeeRouter)
app.use('/post', postRouter)

app.get('/', (req, res) => {
    return res.json("It's working")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
