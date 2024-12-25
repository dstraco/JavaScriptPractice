// Shopping List element addition

// inner html: less efficient
function createListItem(item){
    const li = document.createElement('li');
    
    li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
    document.querySelector('.items').appendChild(li);
}

createListItem('eggs');

//more performant
function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    
    li.appendChild(button);
    
    document.querySelector('.items').appendChild(li);
}
// called in create new item
function createButton(classes) {
    const button = document.createElement('burron');
    button.className = classes;
    
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    
    return button;
}
// called in create new item
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


createNewItem('Cheese');
createNewItem('Bacon');
createNewItem('Protein');
















































