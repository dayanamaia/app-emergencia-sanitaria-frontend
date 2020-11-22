const { Router } = require('express');

const InternacaoController = require('./controllers/InternacaoController');
const ObitoController = require('./controllers/ObitoController');
const TaxaMortalidadeController = require('./controllers/TaxaMortalidadeController');

const routes = Router();

routes.get('/internacoes', InternacaoController.index);

routes.get('/obitos', ObitoController.index);

routes.get('/taxasmortalidades', TaxaMortalidadeController.index);


module.exports = routes;
