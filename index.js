
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

function update() {
    handler();
    setTimeout(update, 1000);
}

update();


//example (to remind):
/*number = 10;
function count() {
    if(number <= 0){  //terminate condition
        return 0;
    }
    number--;
    console.log(number);
}

setTimeout(function rec() {
    count();
    setTimeout(rec, 1000); // the function rec calls itself every single 5 sec.
}, 5000);  // call the function at the first time after 5 sec.*!/*/


