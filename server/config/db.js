// Connect to DB
const mongoose = require('mongoose');

const url = 'mongodb://localhost/memories';

mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Database connected on memories')
}).catch(err => {
  console.log('Connection failed')
})