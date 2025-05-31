import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <img className="footor-logo" src="./assets/logo.png" />

                <p className="footer-tagline">
                    1975’ten beri ayakkabı üretim sektörünün temelini mühendislikle şekillendiriyoruz.
                </p>

                <div className="footer-links">
                    <Link to="/" className="footer-link">
                        Ana Sayfa
                    </Link>

                    <Link to="/hakkimizda" className="footer-link">
                        Hakkımızda
                    </Link>                    <Link to="/iletisim" className="footer-link">
                        İletişim
                    </Link>

                    <Link to="/gizlilik-politikasi" className="footer-link">
                        Gizlilik Politikamız
                    </Link>
                </div>

                <div className="footer-copyright">
                    © 2025 Alkan Taban San. Tic. LTD ŞTİ. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    )
}

export default Footer;