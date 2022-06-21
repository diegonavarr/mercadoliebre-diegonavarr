const express = require('express');
const app =express();
const path = require ('path');

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "localhost"

app.listen(PORT,()=> console.log(`servidor iniciado en puerto ${HOST} ${PORT}`))

app.use(express.static(path.resolve('public')))

app.get('/',(req,res)=>
res.sendFile(path.resolve(__dirname,'views/home.html')))

app.get('/register',(req,res)=>
res.sendFile(path.resolve(__dirname,'views/register.html')))

app.get('/login',(req,res)=>
res.sendFile(path.resolve(__dirname,'views/login.html')))

app.get('*',(req,res)=>
res.send('la ruta que desea acceder no es valida'))


