
import Navbar from './components/nav/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;