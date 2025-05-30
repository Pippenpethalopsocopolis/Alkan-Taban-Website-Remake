import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LandingPage from './main_content/LandingPage';
import About from './main_content/About';
import Contact from './main_content/Contact';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/hakkimizda" element={<About />} />
                <Route path="/iletisim" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;