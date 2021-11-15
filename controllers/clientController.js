const Sequelize = require('sequelize');
const Cliente = require('../models').Cliente;
const Cita = require('../models').Cita;

exports.sendForm = async(req,res,next) => {
  // Req -> Request
  //console.log(req.body);
  let clientData = req.body;
  var userid;
  const newUser = await Cliente.create({
    firstName: clientData.Nombre,
    lastName: clientData.Apellido,
    sector: clientData.zona,
    phone: clientData.Numero,
    meansAware: clientData.meansAware,
    cost:null,
    paymentPeriod: null,
    status: "pending",
    returnable: null
  }).then(function(res){
  console.log("Cliente correctamente");
  userid = res.id;
  }).catch(function(error){
    console.log("hubo error");
 });

 await Cita.update({available:0,ClienteId:userid},{
  where:{
    id: clientData.id
  }
}).then(function(res){
console.log("Cita modified correctamente")
}).catch(function(error){
  console.log("hubo error");
});

  res.redirect('/exito');
};

