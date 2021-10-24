const Sequelize = require('sequelize');
const Nino = require('../models').Nino;

exports.addChild = async(req,res,next) => {
  // Req -> Request
  console.log(req.body);
  //Normalizar nombres de formulario a nombre que esta en modelo y en base de datos
  let childData = req.body;
  console.log(Nino)
  //console.log(Nino.create)
  let addedNino= await Nino.create({
    firstName: childData.name,
    lastName: childData.lastname,
    alergiesDescription: childData.alergies,
    chronicConditionDescription: childData.chronicCondition
  })
  .then(function(res){
    console.log("si pudo");
    console.log(res)
  })
  .catch(function(error){
    console.log("hubo error");
    console.log(error);
  });
};
