var express=require("express"),router=express.Router();router.get("/",function(e,r){r.render("index",{global_header_text:"Home Office"})}),router.get("/examples/template-data",function(e,r){r.render("examples/template-data",{name:"Foo"})}),router.get("/income/1",function(e,r){r.render("income/1/index",{global_header_text:"Home Office",errors_on:e.query.errors})}),router.get("/income/1/results",function(e,r,t){var o=e.query.nino,n=e.query.from_day+"/"+e.query.from_month+"/"+e.query.from_year,a=e.query.to_day+"/"+e.query.to_month+"/"+e.query.to_year;o?r.render("income/1/results",{global_header_text:"Home Office",nino:o,fromDate:n,toDate:a}):r.redirect("/income/1?errors=on")}),router.get("/income/2",function(e,r){r.render("income/2/index",{global_header_text:"Home Office",errors_on:e.query.errors})}),router.get("/income/2/results",function(e,r,t){var o=e.query.nino.split(/\r?\n/),n=new Date(e.query.to_year,e.query.to_month,e.query.to_day),a=new Date(e.query.to_year,e.query.to_month-6,e.query.to_day),s=n.getDate()+"/"+n.getMonth()+"/"+n.getFullYear(),u=a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear();console.log(o.length),1==o.length&&"QQ123456A"==o?r.render("income/2/results-fail",{global_header_text:"Home Office",nino:o,toDate:s,fromDate:u}):1==o.length&&"QQ123456A"!=o&&r.render("income/2/results-success",{global_header_text:"Home Office",nino:o,toDate:s,fromDate:u}),o.length>1?r.render("income/2/results-multiple",{global_header_text:"Home Office",nino:o,toDate:s,fromDate:u}):r.redirect("/income/2?errors=on")}),router.get("/residency",function(e,r){r.render("residency/index",{global_header_text:"Home Office",errors_on:e.query.errors})}),router.get("/residency/results",function(e,r,t){var o=e.query.firstname,n=e.query.lastname,a=e.query.dob_day+"/"+e.query.dob_month+"/"+e.query.dob_year,s=o+" "+n,u=s.toLowerCase();o&&n&&a?r.render("residency/results",{global_header_text:"Home Office",firstName:o,lastName:n,dob:a,contentClass:u}):r.redirect("/residency?errors=on")}),router.get("/residency/results/record",function(e,r){var t=e.query.firstname,o=e.query.lastname;r.render("residency/record",{global_header_text:"Home Office",firstName:t,lastName:o})}),router.get("/residency/results/record/document",function(e,r){var t=e.query.firstname,o=e.query.lastname;r.render("residency/document",{global_header_text:"Home Office",firstName:t,lastName:o})}),module.exports=router;