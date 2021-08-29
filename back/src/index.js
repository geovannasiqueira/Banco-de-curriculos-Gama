const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');


mongoose.connect('mongodb+srv://geovannasiqueira:Mcamila01B@cluster0.oj8rw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
   // useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('3000', () => {
    console.log('servidor rodando na porta 3000');
});