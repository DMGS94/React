import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <nav className="App">
          <Link to="/" className="nav-item">Homepage</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={ <Homepage />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
        </Routes>
      </div>
    );
  }

  export default App;
