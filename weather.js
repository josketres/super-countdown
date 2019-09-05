//fetch weather data:

function fetchData() {
  return (
    fetch("http://api.tvmaze.com/shows/1/episodes")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        return data.map(item => ({
          name: item.name,
          url: item.url,
          runtime: item.runtime,
          airdate: item.airdate,
          airtime: item.airtime
        }));
      })
      // .catch(error => console.error('Error:', error))
      .then(data => {
        console.log("Success:", data);
        return data;
      })
  );
}

const btn = document.getElementById("button");
btn.addEventListener("click", handler);

function showData(arr) {
  let div = document.querySelector(".container");
  for (const item of arr) {
    let itemElem = document.createElement("div");
    div.appendChild(itemElem);
    for (let [key, value] of Object.entries(item)) {
      let newElem = document.createElement("div");
      newElem.innerText = `${key} : ${value}`;
      console.log(`${key}: ${value}`);
      itemElem.appendChild(newElem);
    }
    //another way using for in loop: 
    /* for (const prop in item) {
      let newElem = document.createElement("div");
      newElem.innerText = `${prop} : ${item[prop]}`;
      itemElem.appendChild(newElem);
    } */
  }
}


function handler() {
  fetchData().then(showData);
}


/*
 Task: 

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
(read about: object key, object value, object entry);

<div>
 */

