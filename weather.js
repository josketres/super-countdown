//fetch weather data:

function fetchData() {
    return fetch('http://api.tvmaze.com/shows/1/episodes')
        .then(function(response) {
            return response.json();
        })
        .then(data => {
            return data.map((item) => ({
                name: item.name,
                url: item.url,
                runtime: item.runtime,
                airdate: item.airdate,
                airtime: item.airtime
            }))
        })
        // .catch(error => console.error('Error:', error))
        .then(data => {
            console.log('Success:', data)
            return data;
        });
}
    
const btn = document.getElementById('button');
btn.addEventListener('click', handler);

function showData(arr) {
    console.log(arr);
    let div = document.querySelector('.container');
    for(let i = 0; i < arr.length; i++) {
    let items = document.createElement('div');
    items.id = 'item';
    items.classList.add('wrap');
    items.innerHTML=`<div>${arr[i]}</div>`;
    div.appendChild(items); } 
}

/**
 
1. create handler function for the click event
2. in that function, call the fetchData function
3. show the data when the fetchData promise resolves
// done


4. instead of mapping each element of the array to a string, map them to an object structure, like this:
{
    name:. ..
    url: ...
    runtime: ...
    airdate:
    airtime:
}
5. in your showData function, create a separate div for every item in the array.
6. in each of these divs, create another div for each property on the item, with key and value as the content

<div>
 */

function handler() {
    fetchData()
    .then(showData);
}

