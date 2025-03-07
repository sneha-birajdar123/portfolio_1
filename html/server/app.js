import express from "express"
import path from "path"

import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 5000

app.use(express.static(path.join(__dirname, "build")))

app.get("/sneha", (req, res) => {
    try {
        res.status(200).json({msg: "Hello world!!!!!!!!!"})
    } catch (error) {
        res.status(500).json(console.log(error)
        )
    }
})


app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT, () => {
    console.log(`server is up and running at ${PORT}`);
})