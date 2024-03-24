const express = require('express')
const app = express()
const routes = require('./routes') // route.js with all get methods
const cors = require('cors')

// port being used
const PORT = 5600

// Using cors, json, and routes
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log("The API is running...")
})