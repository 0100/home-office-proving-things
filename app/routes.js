var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {'global_header_text' : 'Home Office'});
});

// Example route: Passing data into a page
router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

router.get('/income', function (req, res) {
  res.render('income/index', {'global_header_text' : 'Home Office', 'errors_on' : req.query.errors});
});

router.get('/income/results', function(req, res, next) {
  var nino = req.query.nino;
  var fromDate = req.query.from_day+"/"+req.query.from_month+"/"+req.query.from_year;
  var toDate = req.query.to_day+"/"+req.query.to_month+"/"+req.query.to_year;

  if(nino){
  	res.render('income/results', {'global_header_text' : 'Home Office', 'nino': nino, 'fromDate': fromDate, 'toDate': toDate});
  }
  else res.redirect('/income?errors=on');
});

// add your routes here
router.get('/residency', function (req, res) {
  res.render('residency/index', {'global_header_text' : 'Home Office', 'errors_on' : req.query.errors});
});


module.exports = router;