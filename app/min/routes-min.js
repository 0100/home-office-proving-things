var express=require("express"),router=express.Router();router.get("/",function(e,r){r.render("index")}),router.get("/examples/template-data",function(e,r){r.render("examples/template-data",{name:"Foo"})}),router.get("/income-proving",function(e,r){r.render("income-proving",{global_header_text:"Home Office"})}),router.get("/income-proving/results",function(e,r){var o=e.param("nino"),t=e.param("from-day")+"/"+e.param("from-month")+"/"+e.param("from-year"),a=e.param("to-day")+"/"+e.param("to-month")+"/"+e.param("to-year");r.render("income-proving/results",{global_header_text:"Home Office",nino:o,fromDate:t,toDate:a})}),module.exports=router;