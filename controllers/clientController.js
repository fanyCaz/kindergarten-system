const Sequelize = require('sequelize');
const Servicio = require('../models').Servicio;

exports.sendForm = async(req,res,next) => {
  // Req -> Request
  console.log(req.body);
 
 // .then(function(res){
    
  //})
  //.catch(function(error){
  //  console.log("hubo error");
//
//  });
 
  res.redirect('/exito');
  
};

