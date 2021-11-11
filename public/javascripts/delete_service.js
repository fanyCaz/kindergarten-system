"use strict";

//CARGAR PÁGINA PRIMERO
document.addEventListener('DOMContentLoaded', function(){
  //Seleccionar todos los botones de eliminar
  let deleteBtns = [...document.getElementsByClassName('js-delete-service')]
  let deleteModal = document.getElementById('deleteServiceModal');
  deleteBtns.forEach(btn => btn.addEventListener('click', function(){
      let id = this.dataset.service;
      deleteModal.querySelector('#serviceId').value = id;
      deleteModal.style.display = "block";
    })
  );
});

//EVENT PARA QUITAR EL MODAL CUANDO
// SE DA CLIC A OTRA PARTE DE LA PÁGINA
window.addEventListener('click', function(event){
  let modal = document.getElementById('deleteServiceModal');
  //remove modal from view
  if(event.target == modal){
    modal.style.display = "none";
  }
});