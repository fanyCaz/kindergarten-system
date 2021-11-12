const Sequelize = require('sequelize');
const Cita = require('../models').Cita;
const Cliente = require('../models').Cliente;

exports.showCalendar = async(req,res,next) => {
  if(!req.isAuthenticated()) {
   return res.redirect("/admin/login");
  }
  appointments = await getAppointments();
  console.log(appointments)
  res.render('schedule',
    { appointments: appointments });
}

exports.addAppointment = async(req,res,next) => {
  // Req -> Request
  console.log(req.body);
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
  let appointmentId = req.params.appointment_id;
  let client ;
  let appointment ;
  let 
  let appointment = await Cita.findOne({
    where: { id: appointmentId },
    attributes: ['beginHour', 'endHour', 'day', 'ClienteId']
  }).catch(function(error){
    console.log("Error al traer cita");
    console.log(error);
  });
  client = await Cliente.findOne({
    where: { id: appointment.ClienteId },
    attributes: ['firstName','lastName','sector','phone','meansAware']
  }).catch(function(error) {
    console.log("Error")
    console.log(error)
  });
  nino = await Nino.findOne({
    
  })
  console.log(client)
  res.render('info_appointment', { client: client });
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
                'available']
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