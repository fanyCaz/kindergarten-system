"use strict";

//CARGAR PÁGINA PRIMERO
document.addEventListener('DOMContentLoaded', function(){

  const onDeleteClick = (event) => {
    console.log("entro a evento")
    console.log(event)
    console.log(event.target)
  }
  //let cancelbtn = document.getElementById('cancelChild');
  let deleteBtns = [...document.getElementsByClassName('js-delete-service')]
  let deleteModal = document.getElementById('deleteServiceModal');
  deleteBtns.forEach(btn => btn.addEventListener('click', function(){
      console.log(this);
      console.log(this.dataset.service)
      var deleteServiceModal = document.getElementById('deleteServiceModal');
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