import './App.css';

function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
    let userInput = prompt("Type a number");
    alert (`Computer number: ${randomNum}, Your Guess: ${userInput}`);
  }

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>
        Guess the number between 1 and 10.
      </button>
    </div>
  );
}

export default App;
