import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";
import cors from 'cors';
const app = express();
await mongoose.connect('mongodb://localhost:27017/school').then(() => {
    console.log('___connect___')
})
app.use(cors())
app.use(express.json())
app.get('/', async (req, resp) => {
    const result = await studentModel.find()
    resp.send(result);
})

app.post('/save', async (req, resp) => {
    const { name, age, email } = req.body;
    if (!name || !email || !age) {
        resp.send({ message: "Data not stored, please provide all field", success: false, storedInfo: null })
    }
    const studentData = await studentModel.create(req.body)
    resp.send({ message: 'data stored', success: true, storedInfo: studentData });
    console.log(studentData)
});
app.put('/update/:id', async (req, resp) => {
    const id = req.params.id;
    console.log(req.body, id);
    const studentData = await studentModel.findByIdAndUpdate(id, {
        ...req.body
    })
    resp.send({
        message: 'Data Updated Succesfully',
        success: true,
        info: studentData
    })

})
app.delete('/delete/:id', async(req, resp) => {
    const id = req.params.id;
    const studentData = await studentModel.findByIdAndDelete(id);
    resp.send({
        message: 'Data Deleted',
        success: true,
        info: studentData
    })
})
app.listen(2300)
