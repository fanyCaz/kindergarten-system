"use strict";

document.addEventListener('DOMContentLoaded', function(){
  var calendarEl = document.getElementById('calendar');
  let apps = JSON.parse(document.getElementById('appointments').dataset.apps);
  let events = [];
  apps.forEach(a => events.push({ 
                                  title: (a.ClienteId != null) ? "Ocupado" : "Disponible",
                                  start: a.day + "T" + a.beginHour,
                                  end: a.day + "T" + a.endHour,
                                  id: a.ClienteId ? a.id : ""
                                }
                              ));
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    locale: 'es',
    hiddenDays: [0],
    titleFormat: {
      month: 'short',
      year: 'numeric',
      day: '2-digit',
    },
    headerToolbar: {
      start: 'prev,next',
      center: 'title',
      end: 'today'
    },
    buttonText: {
      today: 'hoy'
    },
    events: events
  });
  calendar.render();

  calendar.on('dateClick', function(info){
    let dateSelected = new Date(info.dateStr);
    let hours = dateSelected.getHours() < 10 ? "0" + dateSelected.getHours() : dateSelected.getHours();
    let minutes = dateSelected.getMinutes() < 10 ? dateSelected.getMinutes() + "0" : dateSelected.getMinutes();
    let day = dateSelected.getDate() < 10 ? "0" + dateSelected.getDate() : dateSelected.getDate();
    let month = (dateSelected.getMonth() + 1) < 10 ? "0" + (dateSelected.getMonth() + 1) : dateSelected.getMonth() + 1;
    let year = dateSelected.getFullYear();
    let modal = document.getElementById('eventModal');
    let startHour = modal.querySelector('#start_hour');
    startHour.value = hours + ":" + minutes;
    let endHour = modal.querySelector('#end_hour');
    endHour.value = hours + ":" + (parseInt(minutes) + 29);
    modal.querySelector('#day').value = year + "-" + month + "-" + day;
    modal.style.display = "block";
    //remove intrusive label of calendar
    document.getElementsByClassName('fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner')[0].style.display = "none";
  });

  calendar.on('eventClick', function(info){
    let appointmentId = info.event.id;
    if(appointmentId != ""){
      window.location = "http://localhost:3000/admin/schedule/"+ appointmentId +"/client/";
    }
  });
});

window.addEventListener('click', function(event){
  let modal = document.getElementById('eventModal');
  //remove modal from view
  if(event.target == modal){
    modal.style.display = "none";
  }
});
