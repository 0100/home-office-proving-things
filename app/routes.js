var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

// Example route: Passing data into a page
router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

router.get('/income-proving', function (req, res) {
  res.render('income-proving/results', {'global_header_text' : 'Home Office'});
});

router.get('/income-proving/results', function (req, res) {
  var nino = req.param('nino');
  var fromDate = req.param('from-day')+"/"+req.param('from-month')+"/"+req.param('from-year');
  var toDate = req.param('to-day')+"/"+req.param('to-month')+"/"+req.param('to-year');

  res.render('income-proving/results', {'global_header_text' : 'Home Office', 'nino': nino, 'fromDate': fromDate, 'toDate': toDate});
});

// add your routes here

module.exports = router;