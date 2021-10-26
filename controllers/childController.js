const Sequelize = require('sequelize');
const Nino = require('../models').Nino;

function calculateAge(birthdate){
  var transformedAge = birthdate.split('-');
  var dateString = transformedAge[2] + "/" + transformedAge[1] + "/" + transformedAge[0];
  var now = new Date();
  var today = new Date(now.getYear(),now.getMonth(),now.getDate());

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(dateString.substring(6,10),
                     dateString.substring(0,2)-1,
                     dateString.substring(3,5)
                     );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";


  yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
      };

  return age;
}

exports.findChild = async(req,res,next) => {
  console.log("Entra a find child")
  console.log(req.params)
  let childId = req.params.id;
  let child;
  await Nino.findOne({
    where: { id: childId },
    attributes: ['firstName','lastName','emergencyNumber','ageYears']
  }).then(function(res) {
    console.log(res)
    child = res;
  }).catch(function(error){
    console.log("error");
    console.log(error)
  });
  res.render('infoninos',{ child: child });
};

exports.findChildren = async(req,res,next) => {
  let children = [];
  await Nino.findAll({
    attributes: ['id','firstName','lastName','emergencyNumber','ageYears']
  }).then(function(res){
    children = res;
  }).catch(function(error){
    console.log(error)
  });
  res.render('ninos', {
    children: children
  });
};

exports.addChild = async(req,res,next) => {
  // Req -> Request
  //Normalizar nombres de formulario a nombre que esta en modelo y en base de datos
  //Agregar select donde estan los clientes, y seleccionar de ahí
  let childData = req.body;
  let statusMsg = "";
  let addedNino ;
  //let birthdate = new Date(childData.birthdate)
  let age = calculateAge(childData.birthdate);
  await Nino.create({
    firstName: childData.name,
    lastName: childData.lastname,
    alergiesDescription: childData.alergies,
    chronicConditionDescription: childData.chronicCondition,
    entryDate: childData.entryDate,
    birthData: childData.birthdate,
    emergencyNumber: childData.emergencyNumber,
    ageDays: age.days,
    ageMonths: age.months,
    ageYears: age.yearAge,
    ClienteId: 1
  })
  .then(function(res){
    addedNino = res;
    statusMsg = "El niño se ha guardado correctamente";
  })
  .catch(function(error){
    statusMsg = "Ha ocurrido un error, porfavor,intenta de nuevo";
  });
  //Agregar a tabla serviciosnino
  res.redirect('/admin/final-pricing/'+addedNino.id);
};

exports.addCotization = async(req,res,next) => {
  let cotizationBody = req.body;
};