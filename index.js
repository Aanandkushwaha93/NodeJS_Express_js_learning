import express from 'express';
const app = express();
// function check(req, resp, next) {
//     if (!req.query.age || req.query.age < 18) {
//         resp.send("<h1>You are not eligible</h1>")
//     } else {
//         next();
//     }
// }
function ipCheck(req,resp,next) {
    const ip  = req.socket.remoteAddress;
    console.log(ip)
    if(ip.includes('10.238.212.19')){
        resp.send('You can not access this page')
    }else{
        next()
    }
}
// app.use(check)
app.use(ipCheck)
app.get('/', (req, resp) => {
    resp.send("<h1>This is home page</h1>")
})
app.get('/user', (req, resp) => {
    resp.send("<h1>This is user page</h1>")
})
app.get('/admin', (req, resp) => {
    resp.send("<h1>This is user page</h1>")
})
app.listen(2200)