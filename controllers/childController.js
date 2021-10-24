const Sequelize = require('sequelize');
const Nino = require('../models').Nino;

exports.addChild = async(req,res,next) => {
  // Req -> Request
  console.log(req.body);
  //Normalizar nombres de formulario a nombre que esta en modelo y en base de datos
  //Agregar select donde estan los clientes, y seleccionar de ahí
  let childData = req.body;
  let statusMsg = "";
  let addedNino ;
  await Nino.create({
    firstName: childData.name,
    lastName: childData.lastname,
    alergiesDescription: childData.alergies,
    chronicConditionDescription: childData.chronicCondition,
    entryDate: childData.entryDate,
    birthData: childData.birthdate,
    emergencyNumber: childData.emergencyNumber,
    ClienteId: 1
  })
  .then(function(res){
    console.log("si pudo");
    console.log(res.id)
    addedNino = res;
    statusMsg = "El niño se ha guardado correctamente";
  })
  .catch(function(error){
    console.log("hubo error");
    console.log(error);
    statusMsg = "Ha ocurrido un error, porfavor,intenta de nuevo";
  });
  //Agregar a tabla serviciosnino
  res.redirect('/admin/final-pricing/'+addedNino.id);
};

exports.addCotization = async(req,res,next) => {
  console.log(req.body)
  let cotizationBody = req.body;
};