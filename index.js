import express from 'express';
import session from 'express-session';
const app = express();
app.set('view engine', 'ejs');
app.use(session({
    secret: 'apple'
}))
app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, resp) => {
    resp.render('login')
})
app.post('/profile', (req, resp) => {
    req.session.data = resp.data;
    console.log(req.session.data);
    resp.render('profile')
})
app.listen(2200);