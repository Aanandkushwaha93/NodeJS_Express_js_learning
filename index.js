// const express = require('express');
import express from 'express';

const app = express();
app.get("", (req, resp) => {
    resp.send('<h1>Hello my brother</h1>')
});
app.get("/about", (req, resp) => {
    resp.send('<h1>My name is ak</h1>')
})
app.get("", (req, resp) => {
    resp.send('<h1>Hello my brother 2</h1>')
});
app.listen(2200);