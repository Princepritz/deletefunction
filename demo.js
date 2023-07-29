var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');

filter.addEventListener('keyup',filterItems);
form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeitem);
function addItem(e){
    e.preventDefault();
    var newitem=document.getElementById('item').value;
      
    var li=document.createElement('li');

    li.className='list-group-item';
    li.appendChild(document.createTextNode(newitem));
    var description=document.getElementById('description').value;
    var decnode=document.createTextNode("   "+description);
    li.appendChild(decnode);
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

function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
    
  

}