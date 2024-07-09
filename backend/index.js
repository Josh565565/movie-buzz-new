const express = require("express")
const { default: mongoose } = require("mongoose")
const connectMongodb = require('./init/mongodb')
require('dotenv').config()

const Student = require('./models/Movie');

const PORT = process.env.APP_PORT
app = express()

app.use(express.json());
// Database connection 
connectMongodb()


app.get('/', (req, res, next) => {
    res.send("Hello World, This is Cash")
})

app.post('/name', async (req, res, next) => {
    try { 
        const {name} = req.body
        const newStudent = new Student({name: name})
        await newStudent.save()

        res.status(201).json({message: "Name added succesfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/name/:id', async (req, res, naxt) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        if (student) {
          res.status(200).json({ student: student });
        } else {
          res.status(404).json({ message: "Student not found" });
        }
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})


app.listen(PORT, () => console.log(`Server is runing on Port: ${PORT}`))