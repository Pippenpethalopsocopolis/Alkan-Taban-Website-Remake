import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';

import Footer from './Footer';
import './About.css';

function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const companyImages = [
        { src: './assets/Photo-1.jpg', alt: 'Alkan Taban Tesis Dışı 1' },
        { src: './assets/Photo-6.jpg', alt: 'Alkan Taban Tesis Dışı 2' },
        { src: './assets/Untitled_Panorama3.jpg', alt: 'Alkan Taban Tesis Dışı 3' },
        { src: './assets/184.jpg', alt: 'Alkan Taban Tesis Dışı 4' },
        { src: './assets/196.jpg', alt: 'Alkan Taban Tesis Dışı 5' },
        { src: './assets/244.jpg', alt: 'Alkan Taban Tesis Dışı 6' }
    ];

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % companyImages.length
            );
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [companyImages.length]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % companyImages.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? companyImages.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    const stats = [
        { number: '1975', label: 'KURULUŞ YILI' },
        { number: '50+', label: 'YILLIK TECRÜBE' },
        { number: '20000M²', label: 'TESİS' },
        { number: '99.8%', label: 'KALİTE ORANI' }
    ];

    const values = [
        {
            title: 'Kalite',
            description: 'En yüksek kalite standartlarında üretim yaparak müşteri memnuniyetini ön planda tutuyoruz.',
            icon: '🎯'
        },
        {
            title: 'İnovasyon',
            description: 'Gelişen teknolojileri takip ederek sürekli kendimizi yeniliyoruz.',
            icon: '💡'
        },
        {
            title: 'Güvenilirlik',
            description: '50 yıllık tecrübemizle sektörde güvenilir bir partner olmaya devam ediyoruz.',
            icon: '🤝'
        },
        {
            title: 'Sürdürülebilirlik',
            description: 'Çevre dostu üretim süreçleriyle gelecek nesillere daha iyi bir dünya bırakıyoruz.',
            icon: '🌱'
        }
    ];

    return (
        <div className="app-container">
            {/* Navigation */}
            <NavigationBar />

            {/* Hero Section */}
            <section className="about-hero-section">
                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <h1 className="about-hero-title">
                            1975 yılından bu yana
                        </h1>
                        <div id='about-hero-description-container'>
                            <p className="about-hero-description">
                                ayakkabı ve taban sektörüne hizmet vermeye devam eden Alkan Taban, değişen ve gelişen dünya teknolojisini yakından takip edip,
                                her geçen gün kendini yenileyerek sektöründeki haklı yerini korumuş ve sağlamlaştırmıştır.
                                Sektörünün lokomotif firmaları arasında yer alan Alkan Taban, üretim kalitesini sorunsuz ve sınırsız bir şekilde arttırıp,
                                müşteri memnuniyetini ise daha rahat sağlayabileceği 14000 metrekaresi kapalı alan olmak üzere toplamda 20000 metrekarede
                                son donanımlı yeni tesisine taşınmış olup, sektöre hizmet vermeye devam etmektedir.
                            </p>

                            <p className="about-hero-description">
                                Poliüretan, Termo ve TPU taban üretiminde çağın gerektirdiği üstün teknoloji makineler ve uzman kadrosuyla
                                üretim yaparak sektörde önemli bir boşluğu doldurmanın ve Antakya’nın iş gücü ve istihdamına katkıda bulunmanın
                                haklı gururunu yaşamaktadır.
                                “Alkan Taban sizler ile birlikte Türkiye’de ayakkabı ve taban sektörünü bir adım daha ileriye götürebilmeyi
                                kendine hedef edinmiş olup değerli dost ve müşterilerine hayırlı ve bereketli işler diler.”
                            </p>
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

            {/* Company Story Section */}
            <section className="company-story-section">
                <div className="company-story-container">
                    <div className="company-story-grid">
                        <div className="company-story-content">
                            <h2 className="company-story-title">
                                Hikayemiz
                            </h2>
                            <p className="company-story-description">
                                Yarım asırı aşkın süredir ayakkabı taban üretiminde öncü olan Alkan Taban, 
                                1975 yılında kurulduğu günden bu yana kalite ve güvenilirlik ilkelerinden 
                                ödün vermeden yoluna devam etmektedir.
                            </p>
                            <p className="company-story-description">
                                Teknolojik gelişmeleri yakından takip eden firmamız, modern üretim tesisleri 
                                ve deneyimli kadrosuyla sektörde saygın bir konum edinmiştir. Müşteri 
                                memnuniyetini ön planda tutan anlayışımızla, her geçen gün büyümeye 
                                ve gelişmeye devam ediyoruz.
                            </p>                        </div>
                        <div className="company-story-image">
                            <div className="image-swiper">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper" style={{
                                        transform: `translateX(-${currentImageIndex * 100}%)`
                                    }}>
                                        {companyImages.map((image, index) => (
                                            <div key={index} className="swiper-slide">
                                                <img src={image.src} alt={image.alt} />
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Navigation arrows */}
                                    <button className="swiper-nav swiper-prev" onClick={prevImage}>
                                        ‹
                                    </button>
                                    <button className="swiper-nav swiper-next" onClick={nextImage}>
                                        ›
                                    </button>
                                </div>
                                
                                {/* Dots indicator */}
                                <div className="swiper-pagination">
                                    {companyImages.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`swiper-dot ${index === currentImageIndex ? 'active' : ''}`}
                                            onClick={() => goToImage(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="values-container">
                    <div className="values-header">
                        <h2 className="values-title">
                            Değerlerimiz
                        </h2>
                        <p className="values-description">
                            Şirket kültürümüzün temelini oluşturan değerler, her adımımızda bize rehberlik eder.
                        </p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">
                                    {value.icon}
                                </div>
                                <h3 className="value-title">
                                    {value.title}
                                </h3>
                                <p className="value-description">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-container">
                    <h2 className="cta-title">
                        Birlikte Çalışmaya Hazır Mısınız?
                    </h2>
                    <p className="cta-description">
                        50 yıllık tecrübemizi sizin projenizde değerlendirmek ve en kaliteli 
                        ayakkabı tabanı çözümlerini sunmak için bize ulaşın.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/iletisim" className="cta-primary-button">
                            İletişime Geçin
                        </Link>
                        <Link to="/" className="cta-secondary-button">
                            Ana Sayfaya Dön
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default About;