import Apples from "./Apples";
import Bag from "./Bag";
import Pears from "./Pears";

function App() {
  return (
    <div className="App">
      <Bag children={<Apples color="yellow" number="5" />} />
      <Bag children={<Pears friend="Peter" />} />
    </div>
  );
}

export default App;