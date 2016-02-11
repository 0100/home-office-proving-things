var express=require("express"),router=express.Router();router.get("/",function(e,r){r.render("index",{global_header_text:"Home Office"})}),router.get("/examples/template-data",function(e,r){r.render("examples/template-data",{name:"Foo"})}),router.get("/income",function(e,r){r.render("income/index",{global_header_text:"Home Office",errors_on:e.query.errors})}),router.get("/income/results",function(e,r,o){var t=e.query.nino,n=e.query.from_day+"/"+e.query.from_month+"/"+e.query.from_year,u=e.query.to_day+"/"+e.query.to_month+"/"+e.query.to_year;t?r.render("income/results",{global_header_text:"Home Office",nino:t,fromDate:n,toDate:u}):r.redirect("/income?errors=on")}),router.get("/residency",function(e,r){r.render("residency/index",{global_header_text:"Home Office",errors_on:e.query.errors})}),module.exports=router;