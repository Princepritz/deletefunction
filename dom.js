
const head=document.getElementById('header-title');
head.style.borderBottom="solid 3px #000"
console.log(head);

var item=document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor='green';

for(var i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
    //item[i].style.backgroundColor='grey';
}


var item=document.getElementsByTagName('li');
console.log(item);
item[4].style.backgroundColor='green';


    item[4].style.fontWeight='bold';


