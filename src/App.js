import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar';
import inicio from './components/paginas/inicio';
import productos from './components/paginas/productos';
import contacto from './components/paginas/contacto';





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;