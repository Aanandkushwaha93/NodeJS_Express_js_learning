import express from 'express';
const app = express();

function checkAgeRouteMiddleware(req,resp,next) {
    if(!req.query.age||req.query.age<18){
        console.log(req.query.age)
        resp.send('You are not allowed to this site')
    }else{
        next()
    }
}
function checkUrlRouteMiddleware(req,resp,next) {
    console.log('This is Url checker',req.url)
    next();
}

app.get('/', (req, resp) => {
    resp.send('<h1>Home page</h1>')
})
app.get('/login', (req, resp) => {
    resp.send('<h1>Login page</h1>')
})
app.get('/user',checkAgeRouteMiddleware,checkUrlRouteMiddleware, (req, resp) => {
    resp.send('<h1>User page</h1>')
})
app.get('/products',checkAgeRouteMiddleware,checkUrlRouteMiddleware, (req, resp) => {
    resp.send('<h1>Product page</h1>')
})
app.listen(2500);