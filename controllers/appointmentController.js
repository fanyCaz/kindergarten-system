const Sequelize = require('sequelize');
const Cita = require('../models').Cita;

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
