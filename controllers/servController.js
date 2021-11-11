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
 
  res.redirect('/admin/servicios/');
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

exports.findServToEdit = async(req,res,next) => {
  let servId = req.params.id;
  let service;
  await Servicio.findOne({
    where: { id: servId },
    attributes: ['name','cost','minAge','maxAge', 'id']
  }).then(function(res) {
    console.log(res)
    service = res;
  }).catch(function(error){
    console.log("error");
    console.log(error)
  });
  res.render('modificar-serv',{ service: service });
};

exports.modifyService = async(req,res,next) =>{
  console.log("entre a MODIFY")
  let serviceData = req.body;
  console.log(serviceData);
  let servId = req.body.id
  let servicio;
  servicio = await Servicio.findOne({
    where: { id: servId },
    attributes: ['name','cost','id', 'minAge', 'maxAge']
  }).then(function(res) {
    console.log(res)
      res.update(
          {
            name: serviceData.name,
            cost: serviceData.cost,
            minAge: serviceData.minAge,
            maxAge: serviceData.maxAge
          }
      ).then(function (){
          }
      );
  }).catch(function(error){
    console.log("error");
    console.log(error)
  });
  res.redirect("/admin/servicios");
};

exports.findServToDelete = async(req,res,next) => {
  let servId = req.params.id;
  let service;
  await Servicio.findOne({
    where: { id: servId },
    attributes: ['name','cost','minAge','maxAge', 'id']
  }).then(function(res) {
    console.log(res)
    service = res;
  }).catch(function(error){
    console.log("error");
    console.log(error)
  });
  res.render('borrar-serv',{ service: service });
};

exports.deleteService = async(req, res, next) =>{
  console.log("entre a BORRAR SERVICIO")
  let serviceData = req.body;
  console.log(serviceData);
  let servId = req.body.id

  Servicio.destroy({
    where: {
      id: servId
    }
  }).then(function (rowDeleted) {
    if (rowDeleted === 1) {
      console.log("Borrado exitosamente");
    }
  },function (err){
    console.log(err);
  })
  res.redirect("/admin/servicios");
};
