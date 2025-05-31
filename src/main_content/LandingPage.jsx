import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import Footer from './Footer.jsx';
import CookieConsent from './CookieConsent';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const scrollY = useSelector((state) => state.landingPage.scrollY);

    const stats = [
        { number: '50+', label: 'PARTNER ŞİRKETLER' },
        { number: '50M+', label: 'TABAN ÜRETİLDİ' },
        { number: '50+', label: 'YILLIK TECRÜBE' },
        { number: '99.8%', label: 'KALİTE ORANI' }
    ];

    const features = [
        {
            title: 'Kaliteli Malzemeler',
            description: 'Endüstri lideri kauçuk bileşenler ve maksimum dayanıklılık ile performans için tasarlanmış sürdürülebilir malzemeler.',
            image: './assets/2.png'
        },
        {
            title: 'Özel Tasarım',
            description: 'Markanızın spesifikasyonlarına ve performans gereksinimlerine özel olarak tasarlanmış hassas mühendislik ürünü taban çözümleri',
            image: './assets/4.png'
        },
        {
            title: 'Hızlı Üretim',
            description: 'Hızlı teslim süreleri ve tutarlı kalite sunumu ile yüksek kapasiteli üretim tesisleri.',
            image: './assets/Photo-3.jpg'
        },
        {
            title: 'Gelişmiş Teknoloji',
            description: 'Endüstri standartlarını garanti altına alan kapsamlı test protokolleri ve kalite kontrol sistemleri.',
            image: './assets/Photo-5.jpg'
        }
    ];

    return (
        <div className="app-container">
            {/* Navigation */}
            <NavigationBar />

            {/* Hero Section */}
            <section className="hero-section">
                {/* Animated Background Elements */}
                <div
                    className="hero-bg-element hero-bg-element-1"
                    style={{ transform: `translateY(${scrollY * 0.5}px) rotate(15deg)` }}
                />
                <div
                    className="hero-bg-element hero-bg-element-2"
                    style={{ transform: `translateY(${scrollY * -0.3}px) rotate(-12deg)` }}
                />
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Önde Gelen Ayakkabı Üreticileri İçin Endüstriyel Ayakkabı Tabanı Üretimi
                        </h1>
                        
                        <p className="hero-description">
                            Sektörün en güvenilir taban üreticisiyle iş ortaklığı kurun. En yüksek performans,
                            dayanıklılık ve yenilik standartlarını karşılayan, hassas mühendislikle üretilmiş ayakkabı tabanlarını sunuyoruz.
                        </p>
                        
                        <div className="hero-buttons">
                            <button className="primary-button" onClick={() => navigate('/iletisim')}>
                                Bize Ulaşın
                            </button>
                            
                            <button
                                className="secondary-button"
                                onClick={() => {
                                    document.querySelector('.stats-section').scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                Hizmetlerimizi Görün
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-number">
                                {stat.number}
                            </div>
                            <div className="stat-label">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="features-container">
                    <div className="features-header">
                        <h2 className="features-title">
                            Kalite Şansa Bırakılmaz
                        </h2>
                        <p className="features-description">
                            Onlarca yıllık üretim uzmanlığını en son teknolojiyle birleştirerek,
                            sektör standartlarını aşan ayakkabı tabanlarını sizlere sunuyoruz.
                        </p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">
                                    <img src={feature.image} alt={feature.title} className="feature-image" />
                                </div>
                                <h3 className="feature-title">
                                    {feature.title}
                                </h3>
                                <p className="feature-description">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Video Section */}
                    <h2 id="features-video-title">
                        Biz Kimiz?
                    </h2>
                    <p id="features-video-description">
                        1975 yılından bu yana ayakkabı ve taban sektörüne hizmet vermeye devam eden Alkan Taban,
                        değişen ve gelişen dünya teknolojisini yakından takip edip,
                        her geçen gün kendini yenileyerek sektöründeki haklı yerini korumuş ve sağlamlaştırmıştır.
                    </p>

                    <div id="features-video">
                        <video
                            width="100%"
                            height="auto"
                            controls
                            autoPlay
                            muted
                            loop
                            style={{ borderRadius: '12px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}
                        >
                            <source src="./assets/ALKAN-Taban-Defile.mp4" type="video/mp4" />
                            Tarayıcınız video oynatıcısını desteklemiyor.
                        </video>
                    </div>
                    <div id='about-button-container'>
                        <button id="about-button" onClick={() => navigate('/hakkimizda')}>
                            Hakkımızda Daha Fazla Bilgi Alın
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-container">
                    <h2 className="cta-title">
                        Üretiminizi Büyütmeye Hazır Mısınız?
                    </h2>
                    <p className="cta-description">
                        Taban üretimi ihtiyaçları için Alkan Taban'a güvenen onlarca sektör lideri ayakkabı üreticisine katılın.
                        Ayrıntıları birlikte değerlendirelim ve markanız için en iyi çözümleri sunalım.
                    </p>
                    <div className="cta-buttons">
                        <button className="cta-primary-button" onClick={() => navigate('/iletisim')}>
                            Bize Ulaşın ve Üretiminizi Büyütün
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            {/* Cookie Consent */}
            <CookieConsent />
        </div>
    );
};

export default LandingPage;