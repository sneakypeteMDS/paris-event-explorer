'use strict'

function modalGenerator() {

  var el = document.createElement('div'); 
  el.className('modal fade');
  el.id('infoModal');
  document.getElementById('infoModal').tabIndex = -1;
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-labelledby', 'infoModal');
  el.setAttribute('aria-hidden','true');
  
  var elTwo = document.createElement('div');
  elTwo.className('modal-content');
  el.appendChild(elTwo);

 /* el +=   '<div class="modal-dialog" role="document">';
  el +=     '<div class="modal-content">';
  el +=       '<div class="modal-header">';
  el +=         '<h2 class="modal-title" id="title-modal">'+title'</h2>';
  el +=         '<button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>';
  el +=         '</div>';  */
  document.body.appendChild(el);
}

modalGenerator();

   