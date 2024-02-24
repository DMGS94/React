# Number Guessing Game Project

This project is a simple number guessing game. The user clicks a button and is prompted to guess a number between 1 and 10. The program then generates a random number between 1 and 10 and compares it with the user's guess.

## Dynamic Events in React

In React, you can create dynamic events that respond to user input, like clicks or key presses. These events are created using special attributes known as event handlers, such as `onClick` or `onKeyPress`.

In our `App.js` file, we use the `onClick` event handler to create a dynamic event. When the button is clicked, the `handleClick` function is called. This function generates a random number, prompts the user to guess a number, and then compares the user's guess with the generated number.

React events are named using camelCase, rather than lowercase. With JSX you pass a function as the event handler, rather than a string.

Here's an example of an event handler in React:

```jsx
<button onClick={handleClick}>
    Click me
</button>
```

## Main File: App.js

The `App.js` file is the main component of the project. It contains a `handleClick` function that is triggered when the user clicks the button. This function generates a random number, prompts the user to guess a number, and then compares the user's guess with the generated number.

## How to Use

1. Clone the repository: `git clone https://github.com/username/project.git`
2. Navigate into the project directory: `cd project`
3. Install the dependencies: `npm install`
4. Start the project: `npm start`
5. Open a browser and go to `http://localhost:3000`
6. Click the button and try to guess the number!

## Contributing

Contributions are welcome! Feel free to open an issue or pull request.

## License

This project is licensed under the MIT License.
