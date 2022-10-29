const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.use(
  express.urlencoded({
    extended: true
  }),
);

const user = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

mongoose.connect(
  `mongodb+srv://${user}:${password}@apicluster.kb8dmy8.mongodb.net/users?retryWrites=true&w=majority`
)
.then(() => {
  app.listen(3000);
  console.log("sucesso na conexão com o cluster mongoDB!");
})
.catch((error) => console.log(error));






