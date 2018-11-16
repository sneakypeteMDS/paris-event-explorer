function htmlGenerator(title) {

  var el = document.createElement('div'); 
  el.className ='list-group';
  
  var a = document.createElement('a');
  a.className = 'list-group-item list-group-item-action flex-column align-items-start active';
  el.appendChild(a);

  var div = document.createElement('div');
  div.className ='d-flex w-100 justify-content-between';
  a.appendChild(div);

  var title = document.createElement('h5');
  title.className = 'mb-1';
  title.id = 'title-list';
  title.setAttribute('data-toggle', 'modal');
  title.setAttribute('data-target', '#infoModal');
  title.innerHTML = 'title';
  a.appendChild(title);

  var small = document.createElement('small'); 
  small.setAttribute('data-toggle', 'modal');
  small.setAttribute('data-target', '#infoModal');
  a.appendChild(small);

  var description = document.createElement('p');
  description.className = 'mb-1';
  description.id = 'description-list';
  description.setAttribute('data-toggle', 'modal');
  description.setAttribute('data-target', '#infoModal');
  description.innerHTML = 'test';
  a.appendChild(description);

  document.body.appendChild(el);
}

htmlGenerator();
