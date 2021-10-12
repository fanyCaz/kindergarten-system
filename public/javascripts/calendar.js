console.log("holi")

document.addEventListener('DOMContentLoaded', function(){
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
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
    console.log(info);
    info.dayEl.style.backgroundColor = 'red';
  });
});
