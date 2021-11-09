const Sequelize = require('sequelize');
const Cita = require('../models').Cita;

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