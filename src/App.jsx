import { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import LandingPage from './main_content/LandingPage';
import About from './main_content/About';
import Contact from './main_content/Contact';
import PrivacyPolicy from './main_content/PrivacyPolicy';
import store from  './redux_store/Store';
import './App.css';

function App() {
    useEffect(() => {
        document.title = "Alkan Taban - Kalite Şansa Bırakılmaz"; // Set your global title here
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/iletisim" element={<Contact />} />
                    <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;