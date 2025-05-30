import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {setScrollY} from './LandingPageSlicer.jsx';
import './NavigationBar.css';

function NavigationBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const scrollY = useSelector((state) => state.landingPage.scrollY);

    useEffect(() => {
        const handleScroll = () => dispatch(setScrollY(window.scrollY));
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dispatch]);

    return (
        <nav className={`navbar ${scrollY > 50 ? 'navbar-scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" id='logo-link'>
                    <img className="navigatin-logo" src="./assets/logo.png" alt="Alkan Taban Logo" />
                </Link>

                <div className="nav-links" >
                    <Link to="/" className="nav-link">
                        Ana Sayfa
                    </Link>

                    <Link to="/hakkimizda" className="nav-link" >
                        Hakkımızda
                    </Link>

                    <Link to="/iletisim" className="nav-link" >
                        İletişim
                    </Link>

                    <button className="cta-button" onClick={() => navigate('/iletisim')}>
                        Bize Ulaşın
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;