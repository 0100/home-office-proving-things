var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {'global_header_text' : 'Home Office'});
});


// Example route: Passing data into a page
router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

//INCOME PROVING RELEASE 1***************************

router.get('/income/1', function (req, res) {
  res.render('income/1/index', {'global_header_text' : 'Home Office', 'errors_on' : req.query.errors});
});

router.get('/income/1/results', function(req, res, next) {
  var nino = req.query.nino;
  var fromDate = req.query.from_day+"/"+req.query.from_month+"/"+req.query.from_year;
  var toDate = req.query.to_day+"/"+req.query.to_month+"/"+req.query.to_year;

  if(nino){
  	res.render('income/1/results', {'global_header_text' : 'Home Office', 'nino': nino, 'fromDate': fromDate, 'toDate': toDate});
  }
  else res.redirect('/income/1?errors=on');
});

//INCOME PROVING RELEASE 1***************************

router.get('/income/2', function (req, res) {
  res.render('income/2/index', {'global_header_text' : 'Home Office', 'errors_on' : req.query.errors});
});

router.get('/income/2/results', function(req, res, next) {
  var nino = req.query.nino.split(/\r?\n/);
  var toDate = new Date(req.query.to_year, req.query.to_month, req.query.to_day);;
  var fromDate = new Date(req.query.to_year, (req.query.to_month)-6, req.query.to_day);;

  var humanToDate = toDate.getDate()+"/"+toDate.getMonth()+"/"+toDate.getFullYear();
  var humanFromDate = fromDate.getDate()+"/"+fromDate.getMonth()+"/"+fromDate.getFullYear();

  //console.log(nino.length)

  if(nino.length == 1 && nino == "QQ123456A"){
    res.render('income/2/results-fail', {'global_header_text' : 'Home Office', 'nino': nino, 'toDate': humanToDate, 'fromDate': humanFromDate});
    return true
  }
  else if(nino.length == 1 && nino == "QQ123456B"){
    //res.render('income/2/results-unsupported', {'global_header_text' : 'Home Office', 'nino': nino, 'toDate': humanToDate, 'fromDate': humanFromDate});
    res.render('income/2/results-fail', {'global_header_text' : 'Home Office', 'nino': nino, 'toDate': humanToDate, 'fromDate': humanFromDate});
    return true
  }
  else if(nino.length == 1 && nino != "QQ123456A"){
    res.render('income/2/results-success', {'global_header_text' : 'Home Office', 'nino': nino, 'toDate': humanToDate, 'fromDate': humanFromDate});
    return true
  }
  if(nino.length > 1){
    res.render('income/2/results-multiple', {'global_header_text' : 'Home Office', 'nino': nino, 'toDate': humanToDate, 'fromDate': humanFromDate});
    return true
  }
  else res.redirect('/income/2?errors=on');
});

//INCOME PROVING RELEASE 1***************************

router.get('/income/3', function (req, res) {
  res.render('income/3/index', {'global_header_text' : 'Home Office', 'errors_on' : req.query.errors});
});

router.get('/income/3/results', function(req, res, next) {
  
  if(!req.query.nino){
    res.redirect('/income/3?errors=nino');
    return true
  }
  if(!req.query.to_year || !req.query.to_month || !req.query.to_day){
    res.redirect('/income/3?errors=date');
    return true
  }

  var nino = req.query.nino;
  var toDate = new Date(req.query.to_year, req.query.to_month, req.query.to_day);;
  var fromDate = new Date(req.query.to_year, (req.query.to_month)-6, req.query.to_day);;

  var humanToDate = toDate.getDate()+"/"+toDate.getMonth()+"/"+toDate.getFullYear();
  var humanFromDate = fromDate.getDate()+"/"+fromDate.getMonth()+"/"+fromDate.getFullYear();

  if(nino.toLowerCase() == "qq123456a"){
    res.render('income/3/results-fail', {'global_header_text' : 'Home Office', 'nino': nino, 'toDate': humanToDate, 'fromDate': humanFromDate});
    return true
  }
  else if(nino.toLowerCase() == "qq123456b"){
    //res.render('income/3/results-unsupported', {'global_header_text' : 'Home Office', 'nino': nino, 'toDate': humanToDate, 'fromDate': humanFromDate});
    res.render('income/3/results-false-nino', {'global_header_text' : 'Home Office', 'nino': nino, 'toDate': humanToDate, 'fromDate': humanFromDate});
    return true
  }
  else if(nino.toLowerCase() == "error"){
    res.redirect('/income/3?errors=on');
    return true
  }
  else if(nino.toLowerCase() != "qq123456a"){
    res.render('income/3/results-success', {'global_header_text' : 'Home Office', 'nino': nino, 'toDate': humanToDate, 'fromDate': humanFromDate});
    return true
  }
  else res.redirect('/income/3?errors=on');
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
  var nameClass = firstName+" "+lastName;
  var contentClass = nameClass.toLowerCase();

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

router.get('/residency/results/record/document', function (req, res) { 
  var firstName = req.query.firstname;
  var lastName = req.query.lastname;
  
  res.render('residency/document', {'global_header_text' : 'Home Office', 'firstName': firstName, 'lastName': lastName});
});

module.exports = router;