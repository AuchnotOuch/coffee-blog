import express from "express"
import { coffeeRouter } from "./routes/coffee.js"

const app = express()

app.use('/coffee', coffeeRouter)
app.get('/', (req, res) => {
    return res.json("It's working")
})

app.listen(5000, () => console.log("Listening on port 5000"))
