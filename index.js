import express from 'express';
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

app.get('/login', (req, resp) => {
    resp.render('login')
})
app.post('/profile', (req, resp) => {
    resp.setHeader('Set-Cookie', 'login=true')
    resp.setHeader("Set-Cookie", "name=" + req.body.name)
    resp.render('profile')
})
app.get('/', (req, resp) => { 
    let cookieResult = req.get('cookie');
    cookieResult = cookieResult.split(';');
    cookieResult = cookieResult[1].split('=');
    resp.render('home',{name:cookieResult[1]});
}) 
app.listen(2200);