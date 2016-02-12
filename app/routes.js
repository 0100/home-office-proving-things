var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {'global_header_text' : 'Home Office'});
});

//INCOME PROVING***************************

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

//RESIDENCY *********************************
router.get('/residency', function (req, res) {
  res.render('residency/index', {'global_header_text' : 'Home Office', 'errors_on' : req.query.errors});
});

router.get('/residency/results', function(req, res, next) {
  var firstName = req.query.firstname;
  var lastName = req.query.lastname;
  var dob = req.query.dob_day+"/"+req.query.dob_month+"/"+req.query.dob_year;
  var contentClass = false;

  if(firstName == "Lionel"){
    //james bond
    contentClass = "lionel";
  }

  if(firstName && lastName && dob){
    res.render('residency/results', {'global_header_text' : 'Home Office', 'firstName': firstName, 'lastName': lastName, 'dob': dob, contentClass: contentClass});
  }
  else res.redirect('/residency?errors=on');
});

router.get('/residency/results/record', function (req, res) { 
  var firstName = req.query.firstname;
  var lastName = req.query.lastname;
  
  res.render('residency/record', {'global_header_text' : 'Home Office', 'firstName': firstName, 'lastName': lastName});
});

module.exports = router;