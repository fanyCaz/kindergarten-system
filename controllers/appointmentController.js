const Sequelize = require('sequelize');
const Cita = require('../models').Cita;
const Cliente = require('../models').Cliente;
const Nino = require('../models').Nino;

exports.showCalendar = async(req,res,next) => {
  if(!req.isAuthenticated()) {
   return res.redirect("/admin/login");
  }
  appointments = await getAppointments();
  res.render('schedule',
    { appointments: appointments });
}

exports.addAppointment = async(req,res,next) => {
  // Req -> Request
  let appointmentData = req.body;
  await Cita.create({
    day: appointmentData.day,
    beginHour: appointmentData.start_hour,
    endHour: appointmentData.end_hour,
    available: 1
  })
  .then(function(res) {
    console.log("Si ha podido")
  })
  .catch(function(error){
    console.log("hubo error");
    console.log(error);
  });
  res.redirect('/admin/schedule/');
};

exports.showClient = async(req,res,next) => {
  let appointmentId = req.params.id_appointment;
  let client ;
  let appointment ;
  let child ;
  appointment = await Cita.findOne({
    where: { id: appointmentId },
    attributes: ['beginHour', 'endHour', 'day', 'ClienteId']
  }).catch(function(error){
    console.log("Error al traer cita");
    console.log(error);
  });
  client = await Cliente.findOne({
    where: { id: appointment.ClienteId },
    attributes: ['id','firstName','lastName','sector','phone','meansAware']
  }).catch(function(error) {
    console.log("Error")
    console.log(error)
  });
  child = await Nino.findOne({
    where: { ClienteId: client.id },
    attributes: ['firstName','lastName','ageYears']
  }).catch(function(error){
    console.log("Error en nino");
    console.log(error);
  });
  res.render('info_appointment',
              { client: client,
                appointment: appointment,
                child: child
              });
}

exports.getPublicAppointments = async(req,res,next) => {
  let appointments = await getAvailableAppointments();
  res.render('client_calendar', {appointments: appointments});
}

async function getAppointments(){
  let appointments = [];
  await Cita.findAll({
    attributes: ['id',
                'beginHour',
                'endHour',
                'day',
                'available',
                'ClienteId']
    }).then(function(res){
      appointments = res;
    }).catch(function(error){
      console.log(error)
    });
  return appointments;
}

async function getAvailableAppointments() {
  let appointments = [];
  await Cita.findAll({
      where: { available: 1 },
      attributes: [
                'id',
                'beginHour',
                'endHour',
                'day',
              ]
    }).then(function(res){
      appointments = res;
    }).catch(function(error){
      console.log(error)
    });
  return appointments;
}