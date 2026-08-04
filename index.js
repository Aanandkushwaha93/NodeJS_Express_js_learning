import express from 'express';
import { MongoClient } from 'mongodb';
const dbName = "school";
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

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
})

app.listen(3200);