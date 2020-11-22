const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb+srv://flaviodutra:flavio583785@cluster0.akkgg.mongodb.net/healthbase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
