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
        start: "2021-10-09",
        end: "2021-10-09"
      }
    ]
  });
  calendar.render();

  calendar.on('dateClick', function(info){
    let modal = document.getElementById('eventModal');
    modal.style.display = "block";
    //remove intrusive label of calendar
    document.getElementsByClassName('fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner')[0].style.display = "none";
  });
});

window.addEventListener('click', function(event){
  let modal = document.getElementById('eventModal');
  //remove modal from view
  if(event.target == modal){
    modal.style.display = "none";
  }
});
