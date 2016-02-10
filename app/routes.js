var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {'global_header_text' : 'Home Office'});
});

// Example route: Passing data into a page
router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

router.get('/income-proving', function (req, res) {
  res.render('index', {'global_header_text' : 'Home Office'});
});

router.get('/income-proving/results', function (req, res) {
  var nino = req.query.nino;
  var fromDate = req.query.from_day+"/"+req.query.from_month+"/"+req.query.from_year;
  var toDate = req.query.to_day+"/"+req.query.to_month+"/"+req.query.to_year;

  res.render('income-proving/results', {'global_header_text' : 'Home Office', 'nino': nino, 'fromDate': fromDate, 'toDate': toDate});
});

// add your routes here

module.exports = router;