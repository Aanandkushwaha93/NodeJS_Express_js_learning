import express from 'express';
import morgan from 'morgan';
const app = express();
// app.use(morgan('dev'))
app.get('', (req, resp) => {
    resp.send('<h1>Home </h1>')
})
app.get('/login', (req, resp) => {
    resp.send('<h1>Login Page </h1>')
})
app.get('/wait', (req, resp) => {
    setTimeout(() => {
        resp.send('<h1>Wait page </h1>')
    }, 2000);
})
// Error handling page 
app.get('/error', (req, resp) => {
    const error = new Error('');
    error.status = 404;
    next(error);
    resp.send('<h1>This is error page</h1>')
})
app.get('/user', (req, resp, next) => {
    resp.sends('THis is new error')
})

app.use((error, req, resp, next) => {
    // chahe to file bhi send kar sakte he
    resp.status(error.status || 500).send('Try after some time')
})
app.listen(2100)