import './App.css';
import React, { useState } from 'react';

function App() {
  // State to keep track of the display value
  const [display, setDisplay] = useState('');

  // Handler to update the display based on button click
  const handleClick = (value) => () => {
    switch (value) {
      case 'C':
        // Clear the display
        setDisplay('');
        break;
      case '=':
        // Try to evaluate the expression, handle errors
        try {
          setDisplay(eval(display).toString());
        } catch (e) {
          setDisplay('Error');
        }
        break;
      default:
        // Append the value of the button to the display
        setDisplay(display + value);
        break;
    }
  };

  return (
    <div className="App">
      <h1>Calculator App</h1>
      
      <div className="display">
        <h2>{display}</h2>
      </div>
        <div className="buttons">
          <button className="clear" onClick={handleClick('C')}>C</button>
          <button className="number" onClick={handleClick('1')}>1</button>
          <button className="number" onClick={handleClick('2')}>2</button>
          <button className="number" onClick={handleClick('3')}>3</button>
          <button className="operator" onClick={handleClick('+')}>+</button>
          <button className="number" onClick={handleClick('4')}>4</button>
          <button className="number" onClick={handleClick('5')}>5</button>
          <button className="number" onClick={handleClick('6')}>6</button>
          <button className="operator"onClick={handleClick('-')}>-</button>
          <button className="number" onClick={handleClick('7')}>7</button>
          <button className="number" onClick={handleClick('8')}>8</button>
          <button className="number" onClick={handleClick('9')}>9</button>
          <button className="operator"onClick={handleClick('*')}>*</button>
          <button className="zero" onClick={handleClick('0')}>0</button>
          <button className="operator"onClick={handleClick('.')}>.</button>
          <button className="equals" onClick={handleClick('=')}>=</button>
          
        </div>
    </div>
  );
}

export default App;
