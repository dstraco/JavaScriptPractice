const clearBtn = document.querySelector('#clear');



function onClear() {
    let itemList = document.querySelector('ul');
    let items = itemList.querySelectorAll('li');
    
    // items.forEach((item) => item.remove());
    // console.log('Items cleared!')
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}


clearBtn.addEventListener('click', onClear);































































