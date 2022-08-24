
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './paginas/Home';
import Products from './paginas/Products';
import Contact from './paginas/Contact';

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    
                    <Route path='products' element={<Products/>}/>
                    
                    <Route path='Contact' element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
            );
}

export default App;