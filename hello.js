// Receiving form data from Shopping List
const form = document.getElementById('item-form');

function onSubmit(e){
    e.preventDefault();

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (item === '' || priority === '0') {
        alert('Please fill in all fields');
        return;
    }

    console.log(item, priority);
    addToList(item);
}

// Taking in items from input and adding to the shopping list
function addToList(item) {
    newItem = document.createElement('li');
    ul = document.querySelector('ul');

    // Create text node and create elements button/ icon
    const text = document.createTextNode(item);
    const button = document.createElement('button');
    const icon = document.createElement('i');

    // Style new elements/ nodes
    button.className = 'remove-item btn-link text-red';
    button.appendChild(icon);
    icon.className = 'fa-solid fa-xmark';

    // Append text node and button element to new list element
    newItem.appendChild(text);
    newItem.appendChild(button);

    // Append new item to the parent node
    ul.appendChild(newItem);
}



form.addEventListener('submit', onSubmit);








































































