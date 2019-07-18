# Iteration 2

* Based on previous iteration.
* **Twist:** Use a custom `render()` function to update the UI instead of the previous method.

## The render() function
* Gets a state as an input.
* Creates all needed DOM elements to render the given state.
* Appends the parent element of the rendered elements to the `document.body`.

## Hints
* Example of a render function:

```js
const render = (state) => {
   const element = document.createElement('span');
   element.innerText = state.name;
   element.classList.add('person-name');
   
   document.body.innerHTML = ''; // clear body
   document.body.appendChild(element); // render element 
}

const state = { name: 'Morty' };

render(state);
```

* Use `document.createElement` to create a new HTMLElement.
* Use `Node.appendChild` to insert an element as a child of another element.
* Use `Node.innerHTML = ''` to remove all the children of an element.
* Use `Element.classList` to add or remove css classes from an element.
