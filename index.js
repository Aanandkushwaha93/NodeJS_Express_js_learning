// Vanila js
// const express = require('express');
// ECAMA js
// import express from 'express';
// import about from './pages/about.js';
// import home, { contact } from './pages/home.js';
// const app = express();
// app.get("", (req, resp) => {
//     resp.send('<h1>Hello my brother</h1>')
// });
// app.get("/about", (req, resp) => {
//     resp.send(about())
// })
// app.get("/home", (req, resp) => {
//     resp.send(home())
// });
// app.get("/contact", (req, resp) => {
//     resp.send(contact())
// });
// app.listen(2200);
// import express from 'express';
// import login from './pages/login.js';
// import home from './pages/home.js';
// import submit from './submit.js';
// const app = express();
// app.get("",(req,resp)=>{
//     resp.send(home())
// })
// app.get("/login",(req,resp)=>{
//     resp.send(login())
// })
// app.post("/submit",(req,resp)=>{
//     resp.send(submit())
// })
// app.listen(2200)
import express from 'express';
import path from 'path';
const app = express();
const absPath = path.resolve('view');
const publicPath = path.resolve('public/css')

app.use(express.static(publicPath));
console.log(publicPath) 
app.get('/', (req, resp) => {
    resp.sendFile(absPath + '/home.html')
})
app.get('/login', (req, resp) => {
    resp.sendFile(absPath + '/login.html')
})
app.post('/about', (req, resp) => {
    resp.sendFile(absPath + '/about.html')
})
app.use((req, resp) => {
    resp.sendFile(absPath + '/404.html')
})
app.listen(8900);   