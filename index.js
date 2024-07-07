const express = require("express");
require('dotenv').config();

const PORT = process.env.APP_PORT
app = express()


app.get('/', (req, res, next) => {
    res.send("Hello World, This is Cash")
})


app.listen(PORT, () => console.log(`Server is runing on Port: ${PORT}`))