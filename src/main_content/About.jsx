import { Link } from 'react-router-dom';

function About() {
    return (
        <div style={{ padding: '20px', minHeight: '100vh' }}>
            <nav style={{ marginBottom: '20px' }}>
                <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>
                    ← Ana Sayfa'ya Dön
                </Link>
            </nav>
            <h1>Hakkımızda</h1>
            <p>
                1975 yılından bu yana ayakkabı ve taban sektörüne hizmet vermeye devam eden Alkan Taban,
                değişen ve gelişen dünya teknolojisini yakından takip edip,
                her geçen gün kendini yenileyerek sektöründeki haklı yerini korumuş ve sağlamlaştırmıştır.
            </p>
            <p>
                Şirket olarak kaliteli ürün üretmek ve müşteri memnuniyetini sağlamak ana hedefimizdir.
                Modern üretim tesislerimiz ve deneyimli kadromuzla sektörde öncü konumdayız.
            </p>
        </div>
    );
}

export default About;