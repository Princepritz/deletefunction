var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeitem);
function addItem(e){
    e.preventDefault();
    var newitem=document.getElementById('item').value;

    var li=document.createElement('li');

    li.className='list-group-item';
    li.appendChild(document.createTextNode(newitem));
    
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemlist.appendChild(li);
}

function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}