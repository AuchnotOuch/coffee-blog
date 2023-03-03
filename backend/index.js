const express = require("express")
const { coffeeRouter } = require("./routes/coffee.js")
const { postRouter } = require("./routes/post.js")
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = process.env.PORT

app.use('/coffee', coffeeRouter)
app.use('/post', postRouter)

app.get('/', (req, res) => {
    return res.json("It's working")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
