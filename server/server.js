const express = require("express")
const cors = require("cors")

require("dotenv").config({path : "./Config/.env"})
require("./Config/db.js")
const routes = require("./Routers/Routes.js")
const app = express()

const port = 5000 

app.use(cors())
app.use(express.json())

app.use("/api" , routes)
app.listen(port , ()=> {
    console.log(`server is running on port ${port}`);
})
