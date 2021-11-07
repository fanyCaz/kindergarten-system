"use strict";

document.addEventListener('DOMContentLoaded', function(){
  var calendarEl = document.getElementById('calendar');
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
    events: [
      {
        title: "Disponible",
        start: "2021-11-06",
        end: "2021-11-06"
      }
    ]
  });
  calendar.render();

  calendar.on('dateClick', function(info){
    console.log("redirect to form");
  });
});
