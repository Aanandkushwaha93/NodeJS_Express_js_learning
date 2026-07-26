import express from 'express'
const app = express();
function checking(req,resp,next){
    console.log(req.url)
    next()
}
app.use(checking)
app.get('/', (req, resp) => {
resp.send('home')
})
app.get('/about', (req, resp) => {
resp.send('about')
})
app.listen(3300)