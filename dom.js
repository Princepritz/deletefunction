
const head=document.getElementById('header-title');
head.style.borderBottom="solid 3px #000"
console.log(head);

var item=document.getElementsByClassName('list-group-item');
//item[1].style.backgroundColor='red';

for(var i=0;i<item.length;i++){
    item[i].style.backgroundColor='grey';
}

//
