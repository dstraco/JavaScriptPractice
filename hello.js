// Keyboard events

const itemInput = document.getElementById('item-input');

const onKeyPress = () => {
    console.log('keypress')
};

const onKeyUp = () => {
    console.log('keyup')
};

const onKeyDown = (e) => {
    console.log(e.key);
    if(e.key === 'Enter') {
        alert('You pressed enter');
    }
    // KeyCode
    if(e.keyCode === 13) {
        alert('You pressed enter');
    }

    if(e.code === 'Digit1') {
        console.log('You pressed 1');
    }

    if(e.repeat) {
        console.log('You are holding down ' + e.key);
    }
};




// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);




































































