const logo = document.querySelector('img');



const onClick = () => {
    console.log('click event');
}
const onDoubleClick = () => {

    if(document.body.style.backgroundColor !== 'teal'){
        document.body.style.backgroundColor = 'teal';
        document.body.style.color = 'white';
    }else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'grey';
    }
    console.log('double click event');
}

const onRightClick = () => {
    alert('I have been right clicked');
    console.log('RIGHT click event');
}

const onMouseDown = () => {
    document.body.style.color = 'goldenrod';
}
const onMouseUp = () => {
    if(document.body.style.backgroundColor === 'teal'){
        document.body.style.color = 'grey';
    }else if(document.body.style.backgroundColor !== 'teal'){
        document.body.style.color = 'grey';
    }
}

const onMouseWheel = () => {
    console.log('WHEELIE');
}

const onMouseOver = () => {
    console.log('Mouse over');
}

const onDragStart = () => {
    console.log('Drag start event')
}


const onDrag = () => {
    console.log('Drag event')
}

const onDragEnd = () => {
    console.log('Drag end event')
}


// Event Listeners
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('click', onClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
























































