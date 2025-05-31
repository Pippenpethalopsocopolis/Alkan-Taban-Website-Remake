import NavigationBar from './NavigationBar';
import Footer from './Footer';
import './Contact.css';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted');
    };

    return (
        <div className="app-container">
            {/* Navigation */}
            <NavigationBar />

            {/* Hero Section */}
            <section className="contact-hero-section">
                <div className="contact-hero-container">
                    <div className="contact-hero-content">
                        <h1 className="contact-hero-title">
                            İletişim
                        </h1>
                        <p className="contact-hero-description">
                            Ayakkabı tabanı üretimi ihtiyaçlarınız için bizimle iletişime geçin.
                            Uzman ekibimiz size en uygun çözümleri sunmak için hazır.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="contact-content-section">
                <div className="contact-content-container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <div className="contact-info">
                            <h2 className="contact-info-title">İletişim Bilgileri</h2>
                            <div className="contact-info-cards">
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">📞</div>
                                    <div className="contact-info-content">
                                        <h3>Telefon</h3>
                                        <p>+90 326 451 27 00 – 01 – 02</p>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">✉️</div>
                                    <div className="contact-info-content">
                                        <h3>E-posta</h3>
                                        <p>info@alkantaban.com.tr</p>
                                    </div>
                                </div>
                                <div className="contact-info-card">
                                    <div className="contact-info-icon">📍</div>
                                    <div className="contact-info-content">
                                        <h3>Adres</h3>
                                        <p>Antakya Organize Sanayi Bölgesi 4 Nolu Yol No:11 Şenbük-Belen / HATAY</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <h2 className="contact-form-title">Mesaj Gönderin</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        placeholder="Adınız Soyadınız" 
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        placeholder="E-posta Adresiniz" 
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="tel" 
                                        placeholder="Telefon Numaranız" 
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        placeholder="Mesajınız" 
                                        rows="6"
                                        className="form-textarea"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-button">
                                    Mesaj Gönder
                                </button>
                            </form>
                        </div>
                    </div>
                </div>            </section>

            {/* Google Maps Section */}
            <section className="contact-map-section">
                <div className="contact-map-container">
                    <h2 className="contact-map-title">Konumumuz</h2>
                    <div className="contact-map-wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83912.69259426919!2d36.265046181630105!3d36.43819417389261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1525c23202e46b03%3A0xcad6c5e1692d0292!2sAlkan%20Taban!5e0!3m2!1str!2str!4v1748732516811!5m2!1str!2str"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Alkan Taban Konumu"
                        ></iframe>
                    </div>
                    <div className="contact-map-address">
                        <p>Antakya Organize Sanayi Bölgesi 4 Nolu Yol No:11 Şenbük-Belen / HATAY</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Contact;
