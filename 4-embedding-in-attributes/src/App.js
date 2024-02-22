import "./App.css";
import Card from "./Card";

function App() {
        const styles = {
                display: 'flex',
                justifyContent: 'center'
        }
  return (
    <div className="App">
        <h1>Task: add three Card elements</h1>
        <div style={styles}>
            <Card h2="First card's h2" h3="First card's h3"/>
            <Card h2="Second card's h2" h3="Second card's h3"/>
            <Card h2="Third card's h2" h3="Third card's h3" />
        </div>
    </div>
  );
}

export default App;