import express from 'express';
import path from 'path';

const app = express();
app.use(express.urlencoded({extended:false}))
app.use(express.static('public/'))
app.get('/', (req, resp) => {
    const filePath = path.resolve('view/home.html')
    resp.sendFile(filePath)
})
app.get('/login', (req, resp) => {
    resp.send(`
         <form action="/submit" method="post">
        <input type="text" name="name"><br/>
        <input type="text" name="password" type="password"><br/>
        <button type="submit">Submit </button>
    </form>`)
})
app.post('/submit', (req, resp) => {
    console.log('data submit',req.body)
    resp.send('<h1>Data submit page </h1>')
})
app.listen(4500)