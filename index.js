import mongoose from "mongoose";
async function dbConnectio() {
    await mongoose.connect('mongodb://localhost:27017/school');
    const schema = mongoose.schema({
        name:String,
        email:String,
        age:Number
    })
    const studentModel = mongoose.model('student',schema);
    const result = studentModel.find();
    console.log(result);
}