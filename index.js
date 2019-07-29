
function getDateFormatted() {
    let date = new Date();
    let hours = addZeroes(date.getHours());
    let mins = addZeroes(date.getMinutes());
    let secs = addZeroes(date.getSeconds());
    return `${hours} : ${mins} : ${secs}`;
}

function addZeroes(value) {
    return (value < 10 ? '0' + value : value).toString();
}

function render(state) {
    const container = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = state;
    span.classList.add('count');
    document.body.innerHTML = ''; // clear body
    document.body.appendChild(container); // render main element
    container.appendChild(span); // render child element of div
}

function handler() {
    let state = getDateFormatted();
    render(state);
}

//first case with SetTimeout
/*function update() {
    if(seconds >= 5) {
        return;
    }
    seconds++;
    handler();
    setTimeout(update, 1000);
}

update();*/

let seconds = 0;

setTimeout(function getTimer() {
    handler();
    let timerId = setTimeout(getTimer, 1000);
    seconds++;
    if (seconds >=60) {
        clearTimeout(timerId);
    }
}, 1000);




