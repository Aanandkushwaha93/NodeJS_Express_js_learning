import express from "express";
const app = express();
// app.set('view engine', 'ejs');
// app.get('', (req, resp) => {
//     resp.render('home',{name:'Anil sidhu',email:'aanandkushwah@gmail.com'})
// })

// Add form data in Template engine
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.get('/login', (req, resp) => {
    resp.render('addUser')
})
app.post('/submit-user', (req, resp) => {
    resp.render('SubmitUser',req.body)
})
app.listen(4500);