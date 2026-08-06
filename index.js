import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
const dbName = "school";
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
client.connect().then((connection) => {
    const db = connection.db(dbName);
    app.get('/api', async (req, resp) => {
        const collection = db.collection('student');
        const students = await collection.find().toArray();
        resp.send(students);
    })
    app.get('/ui', async (req, resp) => {
        const collection = db.collection('student');
        const students = await collection.find().toArray();
        resp.render('students', { students });
    })
    app.get('/add', (req, resp) => {
        resp.render('add-student')
    });
    app.post('/add-user', async (req, resp) => {
        // console.log(req.body);
        const collection = db.collection('student');
        const result = await collection.insertOne(req.body);
        console.log(result);
        resp.send('data saved');
    })
    app.post('/add-student-api', async (req, resp) => {
        const { name, age, email } = req.body;
        if (!name || !age || !email) {
            resp.send({ message: "Operation Failed", success: false })
            return false;
        }
        const collection = db.collection('student');
        const result = await collection.insertOne(req.body)
        resp.send({ message: "data stored", success: true, result: result });
    })
    app.delete('/delete/:id', async (req, resp) => {
        console.log(req.params.id);
        const collection = db.collection('student');
        const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result) {
            resp.send({
                message: "Student data deleted",
                success: true
            })
        } else {
            resp.send({
                message: 'Student data not deleted, try after sometime',
                success: false
            })
        }
    })
    app.get('/ui/delete/:id', async (req, resp) => {
        console.log(req.params.id);
        const collection = db.collection('student');
        const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result) {
            resp.send('<h1>Student data deleted</h1>')
        } else {
            resp.send('<h1>Student data not deleted</h1>')
        }
    });
    app.get('/ui/update/:id', async (req, resp) => {
        const collection = db.collection('student');
        const result = await collection.findOne({ _id: new ObjectId(req.params.id) });
        // console.log(result)
        resp.render('update-student', { result });
    })
    app.post('/ui/update/:id', (req, resp) => {
        //    console.log(req.params.id);
        console.log(req.body)
        const collection = db.collection('student');
        const filter = { _id: new ObjectId(req.params.id) };
        const update = { $set: req.body }
        const result = collection.updateOne(filter, update)
       if(result){
         resp.send("Data update successfuly",result);
       }else{
         resp.send("Data not update please try again some time");
       }
    })
})

app.listen(3200);