import express from "express";
import { MongoClient } from "mongodb";
const url = 'mongodb+srv://aanandkushwaha:c0x7GONPVhTKh9to@cluster0.alfcauh.mongodb.net/?appName=Cluster0';
const database = 'school';
const collection = 'student';
const client = new MongoClient(url);
client.connect().then(()=>[
    console.log('.......connect.......')
])
async function dbConnection() {
    const db = client.db(database);
    const collectionResult = db.collection(collection);
    const result = await collectionResult.find().toArray();
    console.log(result);    
}
dbConnection();