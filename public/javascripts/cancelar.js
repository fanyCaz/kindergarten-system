"use strict";

//CARGAR PÁGINA PRIMERO
document.addEventListener('DOMContentLoaded', function(){
  let cancelModal = document.getElementById('cancelModal');
  let cancelbtn = document.getElementById('cancelChild');

  //EVENTO PARA CUANDO SE DA CLICK AL BOTÓN DE CANCELAR
  cancelbtn.addEventListener('click', function(){
    var cancelModal = document.getElementById('cancelModal');
    let id = document.getElementById('childid').value;
    cancelModal.querySelector('#childId').value = id;
    cancelModal.style.display = "block";
  });
});

//EVENT PARA QUITAR EL MODAL CUANDO
// SE DA CLIC A OTRA PARTE DE LA PÁGINA
window.addEventListener('click', function(event){
  let modal = document.getElementById('cancelModal');
  //remove modal from view
  if(event.target == modal){
    modal.style.display = "none";
  }
});