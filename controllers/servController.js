const Sequelize = require('sequelize');
const Servicio = require('../models').Servicio;

exports.addService = async(req,res,next) => {
  // Req -> Request
  console.log(req.body);
 
  //Normalizar nombres de formulario a nombre que esta en modelo y en base de datos
  //Agregar select donde estan los clientes, y seleccionar de ahí
  let servData = req.body;
  min= parseInt(servData.age.split('-')[0])
  max=parseInt(servData.age.split('-')[1])
  let statusMsg = "";
  let addedServicio ;
  await Servicio.create({
    minAge: min,
    maxAge: max,
    cost: servData.cost,
    name: servData.name,
  })
  .then(function(res){
    console.log("si pudo");
    console.log(res.id)
    addedServicio = res;
    statusMsg = "El servicio se ha guardado correctamente";
  })
  .catch(function(error){
    console.log("hubo error");
    console.log(error);
    statusMsg = "Ha ocurrido un error, porfavor,intenta de nuevo";
  });
 
  res.redirect('/admin/ninos/');
};

exports.findServices = async(req,res,next) => {
  if(!req.isAuthenticated()) {
    return res.redirect("/admin/login");
  }
  // if authenticated it proceeds with normal procedure
  let services = [];
  await Servicio.findAll({
    attributes: ['id',
      'minAge',
      'maxAge',
      'cost',
      'name']
  }).then(function(res){
    services = res;
  }).catch(function(error){
    console.log(error)
  });
  return res.render('servicios', {
    services: services
  });

};

