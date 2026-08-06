import mongoose from "mongoose";
async function dbConnection() {
    await mongoose.connect('mongodb://localhost:27017/school');
    const schema = mongoose.Schema({
        name:String,
        email:String,
        age:Number
    });
    const studentModel = mongoose.model('student',schema);
    const result = await studentModel.find();
    console.log(result);
} 
dbConnection(); 