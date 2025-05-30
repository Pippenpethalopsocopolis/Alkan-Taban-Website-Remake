import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div style={{ padding: '20px', minHeight: '100vh' }}>
            <nav style={{ marginBottom: '20px' }}>
                <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>
                    ← Ana Sayfa'ya Dön
                </Link>
            </nav>
            <h1>İletişim</h1>
            <div style={{ maxWidth: '600px' }}>
                <h2>Bize Ulaşın</h2>
                <p>
                    Taban üretimi ihtiyaçlarınız için bizimle iletişime geçin.
                    Uzman ekibimiz size en uygun çözümleri sunmak için hazır.
                </p>
                
                <div style={{ marginTop: '30px' }}>
                    <h3>İletişim Bilgileri</h3>
                    <p><strong>Telefon:</strong> [Telefon numarası]</p>
                    <p><strong>E-posta:</strong> [E-posta adresi]</p>
                    <p><strong>Adres:</strong> [Şirket adresi]</p>
                </div>

                <div style={{ marginTop: '30px' }}>
                    <h3>Mesaj Gönderin</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input 
                            type="text" 
                            placeholder="Adınız Soyadınız" 
                            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                        />
                        <input 
                            type="email" 
                            placeholder="E-posta Adresiniz" 
                            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                        />
                        <input 
                            type="tel" 
                            placeholder="Telefon Numaranız" 
                            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                        />
                        <textarea 
                            placeholder="Mesajınız" 
                            rows="5"
                            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', resize: 'vertical' }}
                        ></textarea>
                        <button 
                            type="submit"
                            style={{ 
                                padding: '12px 24px', 
                                backgroundColor: '#007bff', 
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '5px', 
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            Mesaj Gönder
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
