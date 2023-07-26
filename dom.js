

var itemlist=document.querySelector('#items');
  
console.log(itemlist.parentNode.parentNode.parentNode);
itemlist.parentNode.style.backgroundColor='grey';

//console.log(itemlist.childNodes);
//console.log(itemlist.children[0].style.backgroundColor='pink');
console.log(itemlist.firstChild);
console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.textContent='pritam';
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='hellow4';
console.log(itemlist.nextSibling);
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);

var newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';

var newdivtext=document.createTextNode(' HEllo word ');

newdiv.appendChild(newdivtext);

newdiv.setAttribute('title','hello div');

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

var after=document.querySelector('.list-group');
var before=document.querySelectorAll('.list-group-item:nth-child(1)');
 

container.insertBefore(newdiv,h1);

console.log(newdiv);