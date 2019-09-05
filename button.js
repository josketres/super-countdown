function promiseClick(selector) {    
    return new Promise((resolve, reject) => {
        const el = document.querySelector(selector);
        if (!el) {
            return reject(`no element found with selector="${selector}"`);
        }
    
        el.addEventListener('click', resolve);
    });
 }
 
promiseClick('#button')
.then(() => console.log('clicked'))
.catch((e) => console.log(e));



