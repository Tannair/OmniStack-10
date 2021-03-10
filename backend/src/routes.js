const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

// Tipos de parâmetros:

// Query Params: request.query (req.query) - Filtros, ordenação, paginação, ... 
// Routes Params: request.params (Identificar um recurso na alteração ou remoção)  '/users/:id'
// Body: request.body (dados)

//MongoDB (não-relacional)

routes.post('/users', (request, response) => { // Estudo
    console.log(request.body);
    const data = request.body;

    //NÃO FUNCIONA EM ARQUIVO SEPARADO !!! \/
   // return res.send("Seu nome é " + data.name + " e seu e-mail: " + data.email); // Em vez de .send vamos usar .json  

    return response.json({ name: data.name, email: data.email }); // Em vez de .send vamos usar .json 

}); 

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);


module.exports = routes;