const cors = require ('cors');
const express = require ('express');
const mongoose = require ('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://tanna:tanair@cluster0-shard-00-00.sfs8b.mongodb.net:27017,cluster0-shard-00-01.sfs8b.mongodb.net:27017,cluster0-shard-00-02.sfs8b.mongodb.net:27017/week10?ssl=true&replicaSet=atlas-byd9c6-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true  
});

app.use(cors());
app.use(express.json()); //Ficar sempre antes, se quero q algo utilize 
app.use(routes);

app.listen(3333);