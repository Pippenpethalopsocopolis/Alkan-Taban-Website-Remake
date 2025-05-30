import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import LandingPage from './main_content/LandingPage';
import About from './main_content/About';
import Contact from './main_content/Contact';
import store from  './redux_store/Store';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/iletisim" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;