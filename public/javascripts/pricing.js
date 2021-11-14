"use strict";

document.addEventListener('DOMContentLoaded', function(){
  let discountInput = document.getElementById('discount');
  let staticCost = document.getElementById('static_cost').innerHTML;

  discountInput.addEventListener('input', function(){
    discount = discountInput.value;
    let costElement = document.getElementById('final_cost');
    let cost = parseInt( staticCost );
    if( Number.isInteger(parseInt(discount)) ){
      cost = cost - (cost * (discount * 0.01) );
    }
    costElement.innerHTML = (cost > 0) ? "$ " + cost : 0;
  });
});