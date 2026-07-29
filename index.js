import express from "express";
import { usercontroller } from "./controller/userController.js";
const app = express();
app.set('view engine', 'ejs')
app.get('/users', usercontroller)
app.listen(3900)