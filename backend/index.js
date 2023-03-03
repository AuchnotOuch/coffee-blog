import express from "express"

const app = express()

app.get('/', (req, res) => {
    return res.json("It's working")
})

app.listen(5000, () => console.log("Listening on port 5000"))
