"use strict";

document.addEventListener('DOMContentLoaded', function(){
  var cancelarEl = document.getElementById('cancelar');
    });
  cancelar.render();

  cancelar.on('dateClick', function(info){
    let modal = document.getElementById('eventModal');
    modal.style.display = "block";
    //remove intrusive label of calendar
    document.getElementsByClassName('fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner')[0].style.display = "none";
  });

window.addEventListener('click', function(event){
  let modal = document.getElementById('eventModal');
  //remove modal from view
  if(event.target == modal){
    modal.style.display = "none";
  }
});