const { Router } = require('express');

const InternacaoController = require('./controllers/InternacaoController');
const ObitoController = require('./controllers/ObitoController');
const TaxaMortalidadeController = require('./controllers/TaxaMortalidadeController');

const routes = Router();

routes.get('/internacoes', InternacaoController.index);
routes.get('/internacoes/regiao/:regiao', InternacaoController.show);

routes.get('/obitos', ObitoController.index);
routes.get('/obitos/regiao/:regiao', ObitoController.show);


routes.get('/taxasmortalidades', TaxaMortalidadeController.index);
routes.get('/taxasmortalidades/regiao/:regiao', TaxaMortalidadeController.show);



module.exports = routes;
