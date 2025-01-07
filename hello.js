// Receiving form data from Shopping List
const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list')
const clearBtn = document.querySelector('#clear');

function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}
function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function addItem(e) {
    e.preventDefault();     // always call on form object

    const newItem = itemInput.value;

    // Validate input
    if (newItem === ''){
        alert('Enter an item');
        return;
    }

    // Create List item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    // Add li to ul
    itemList.appendChild(li);
    itemInput.value = '';
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearAll(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}



// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearAll)







// if no items do not show "filter items" or "clear all"




































































