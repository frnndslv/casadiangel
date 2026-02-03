import { Row, Col, Typography, Image } from 'antd'
import img1 from '../assets/img/Foto-comidas-cafe.jpg'
import img2 from '../assets/img/Foto-comida-cafe-brunch.PNG'
import img3 from '../assets/img/Foto-promocao-cafe-manha.jpg'
import img4 from '../assets/img/Area-infantil4.JPG'
import img5 from '../assets/img/Area-infantil3.JPG'
import img6 from '../assets/img/Area-infantil2.JPG'
import img7 from '../assets/img/Area-infantil.JPG'

const { Title, Paragraph } = Typography

export default function Gallery() {
  const images = [
    { src: img1, alt: 'Espaço Casa di Angel' },
    { src: img2, alt: 'Espaço Casa di Angel' },
    { src: img3, alt: 'Espaço Casa di Angel' },
    { src: img4, alt: 'Área Infantil' },
    { src: img5, alt: 'Área Infantil' },
    { src: img6, alt: 'Área Infantil' },
    { src: img7, alt: 'Área Infantil' }
  ]

  return (
    <section style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#f9eac9' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <Title level={2} style={{ color: '#213a36', marginBottom: 30, fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
          Nossos Espaços
        </Title>
        <Paragraph style={{ fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: 40, color: '#213a36' }}>
          Conheça nossos ambientes acolhedores e espaços especiais
        </Paragraph>
        
        <Image.PreviewGroup>
          <Row gutter={[16, 16]} style={{ marginTop: 30 }}>
            {images.map((image, index) => (
              <Col xs={12} sm={8} md={6} key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: 8,
                    cursor: 'pointer'
                  }}
                />
              </Col>
            ))}
          </Row>
        </Image.PreviewGroup>
      </div>
    </section>
  )
}
