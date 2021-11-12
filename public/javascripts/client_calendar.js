"use strict";

document.addEventListener('DOMContentLoaded', function(){
  var calendarEl = document.getElementById('calendar');
  let apps = JSON.parse(document.getElementById('appointments').dataset.apps);
  let events = [];
  apps.forEach(a => events.push({ title: "Disponible", start: a.day + "T" + a.beginHour, end: a.day + "T" + a.endHour }));
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

  calendar.on('eventClick', function(info){
    console.log(info);
    console.log(info.event)
  });

});
