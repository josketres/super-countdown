
function addZeroes(value) {
    return (value < 10 ? '0' + value : value).toString();
}

const date = new Date();
const hours = addZeroes(date.getHours());
const mins = addZeroes(date.getMinutes());


const secs = addZeroes(date.getSeconds());


const text = document.createTextNode(`${hours} : ${mins} : ${secs}`);
document.querySelector('#count').appendChild(text);




