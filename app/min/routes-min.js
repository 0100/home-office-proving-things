var express=require("express"),router=express.Router();router.get("/",function(e,r){r.render("index",{global_header_text:"Home Office"})}),router.get("/examples/template-data",function(e,r){r.render("examples/template-data",{name:"Foo"})}),router.get("/income",function(e,r){r.render("income/index",{global_header_text:"Home Office",errors_on:e.query.errors})}),router.get("/income/results",function(e,r,t){var o=e.query.nino,n=e.query.from_day+"/"+e.query.from_month+"/"+e.query.from_year,a=e.query.to_day+"/"+e.query.to_month+"/"+e.query.to_year;o?r.render("income/results",{global_header_text:"Home Office",nino:o,fromDate:n,toDate:a}):r.redirect("/income?errors=on")}),router.get("/residency",function(e,r){r.render("residency/index",{global_header_text:"Home Office",errors_on:e.query.errors})}),router.get("/residency/results",function(e,r,t){var o=e.query.firstname,n=e.query.lastname,a=e.query.dob_day+"/"+e.query.dob_month+"/"+e.query.dob_year,s=!1;"Lionel"==o&&(s="lionel"),o&&n&&a?r.render("residency/results",{global_header_text:"Home Office",firstName:o,lastName:n,dob:a,contentClass:s}):r.redirect("/residency?errors=on")}),router.get("/residency/results/record",function(e,r){var t=e.query.firstname,o=e.query.lastname;r.render("residency/record",{global_header_text:"Home Office",firstName:t,lastName:o})}),router.get("/residency/results/record/document",function(e,r){var t=e.query.firstname,o=e.query.lastname;r.render("residency/document",{global_header_text:"Home Office",firstName:t,lastName:o})}),module.exports=router;