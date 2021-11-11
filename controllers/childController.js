const Sequelize = require('sequelize');
const Nino = require('../models').Nino;
const ServiciosNino= require('../models').ServiciosNino

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
    years: yearAge || 1,
    months: monthAge || 1,
    days: dateAge || 1
  };

  return age;
}

exports.findChild = async(req,res,next) => {
  if(!req.isAuthenticated()) {
    return res.redirect("/admin/login");
  }
  // if authenticated it proceeds with normal procedure
  let childId = req.params.id;
  let child;
  await Nino.findOne({
    where: { id: childId },
    attributes: ['id',
                  'firstName',
                  'lastName',
                  'emergencyNumber',
                  'ageYears',
                  'alergiesDescription',
                  'chronicConditionDescription',
                  'birthData',
                  'entryDate']
  }).then(function(res) {
    console.log(res)
    child = res;
  }).catch(function(error){
    console.log("error");
    console.log(error)
  });
  return res.render('infoninos',{ child: child });
  
};

exports.findChildToEdit = async(req,res,next) => {
  console.log("Entra a find child2")
  console.log(req.params)
  let childId = req.params.id;
  let child;
  await Nino.findOne({
    where: { id: childId },
    attributes: ['firstName','lastName','emergencyNumber','ageYears', 'id', 'alergiesDescription', 'chronicConditionDescription', 'birthData']
  }).then(function(res) {
    console.log(res)
    child = res;
  }).catch(function(error){
    console.log("error");
    console.log(error)
  });
  res.render('modificar-nino',{ child: child });
};


exports.findChildren = async(req,res,next) => {
  if(!req.isAuthenticated()) {
   return res.redirect("/admin/login");
  }
  // if authenticated it proceeds with normal procedure
  let children = [];
  await Nino.findAll({
    where: { status: 1 },
    attributes: ['id',
                'firstName',
                'lastName',
                'emergencyNumber',
                'ageYears',
                'alergiesDescription',
                'chronicConditionDescription',
                'birthData',
                'entryDate']
  }).then(function(res){
    children = res;
  }).catch(function(error){
    console.log(error)
  });
  return res.render('ninos', {
    children: children
  }); 

};

exports.addChild = async(req,res,next) => {
  // Req -> Request
  //Normalizar nombres de formulario a nombre que esta en modelo y en base de datos
  let childData = req.body;
  let statusMsg = "";
  let addedNino ;
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
    status: 1
  })
 

  .then(function(res){
    addedNino = res;
    statusMsg = "El niño se ha guardado correctamente";
    console.log("correctamente")
  })
  .catch(function(error){
    console.log(error)
    statusMsg = "Ha ocurrido un error, porfavor,intenta de nuevo";
  });
  //Agregar a tabla serviciosnino
  res.redirect('/admin/final-pricing/'+addedNino.id);
};



exports.modifyChild = async(req,res,next) =>{
  console.log("entre a MODIFY")
  let childData = req.body;
  let dateExists = true;
  if(childData.birthdate === ''){
    dateExists = false;
  }


  console.log(childData)
  let childId = req.body.id
  let nino;
  nino = await Nino.findOne({
    where: { id: childId },
    attributes: ['firstName','lastName','id']
  }).then(function(res) {
    console.log(res)
    if (dateExists){
      res.update(
          {
            firstName: childData.name,
            lastName: childData.lastname,
            birthData: childData.birthdate,
            alergiesDescription: childData.alergies,
            chronicConditionDescription: childData.chronicCondition,
            emergencyNumber: childData.emergencyNumber
          }
      ).then(function (){
          }
      );
    }else{
      res.update(
          {
            firstName: childData.name,
            lastName: childData.lastname,
            alergiesDescription: childData.alergies,
            chronicConditionDescription: childData.chronicCondition,
            emergencyNumber: childData.emergencyNumber
          }
      ).then(function (){
          }
      );
    }

  }).catch(function(error){
    console.log("error");
    console.log(error)
  });
  res.redirect("/admin/ninos");
};

exports.cancelarChild = async(req,res,next) =>{
  let childId = parseInt(req.body.childId);
  let nino;
  await Nino.findOne({
    where: { id: childId }
  }).then(function(res) {
    console.log(res)
    res.update(
      {
        status: 0
      }
    );
  }).catch(function(error){
    console.log("error");
    console.log(error)
  });
  res.redirect("/admin/ninos");
};

exports.addCotization = async(req,res,next) => {
  let cotizationBody = req.body;
};
