// Receiving form data from Shopping List

const form = document.getElementById('item-form');

// Method 1
function onSubmit(e){
    e.preventDefault();

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (item === '' || priority === '0') {
        alert('Please fill in all fields');
        return;
    }

    console.log(item, priority);
}

// Method 2
function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const item = formData.get('item');
    const priority = formData.get('priority');
    console.log(item, priority);
    // add to list
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



form.addEventListener('submit', onSubmit2);






































































