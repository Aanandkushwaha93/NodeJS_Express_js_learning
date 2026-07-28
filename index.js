import express from "express";
const app = express();
app.set('view engine', 'ejs');

app.get('', (req, resp) => {
    resp.render('home',{name:'Anil sidhu',email:'aanandkushwah@gmail.com'})
})
app.listen(4500);