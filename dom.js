
const head=document.getElementById('header-title');
head.style.borderBottom="solid 3px #000"
console.log(head);

var item=document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor='green';

for(var i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
    //item[i].style.backgroundColor='grey';
}

var hh=document.querySelector('.list-group-item:nth-child(2)');
hh.style.color='green';
 
var odd=document.querySelectorAll('li:nth-child(odd)');


for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

