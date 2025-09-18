// Add JS here
// Destructure Reef methods
let { signal, component } = reef;

// 1. Create a signal for your reactive data
let todos = signal(['Swim', 'Climb', 'Jump', 'Play']);

// 2. Define a template function
function todoTemplate() {
    return `
              <ul>
                  ${todos.map(function (todo) {
        return `<li>${todo}</li>`;
    }).join('')}
              </ul>
          `;
}

// 3. Create and render the reactive component
// It will automatically render into the '#app' element
component('#app', todoTemplate);

// Example of how to update the data, which will automatically re-render the component
setTimeout(() => {
    todos.push('Take a nap... zzzz');
}, 2000);