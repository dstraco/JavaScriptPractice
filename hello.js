function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');
    
    const li = document.createElement('li');
    li.textContent = 'Replaced First';
    
    firstItem.replaceWith(li);
}


function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)');
    
    secondItem.outerHTML = '<li>Replaced Second</li>';
}

function replaceAllItems(){
    const items = document.querySelectorAll('li');
    
    items.forEach((item, index) => {
        
        if(index===1){
            item.innerHTML = 'Second Item';
        } else {
            item.innerHTML = 'Replace All';
        }
    });
}





replaceFirstItem();
replaceSecondItem();
replaceAllItems();
























































