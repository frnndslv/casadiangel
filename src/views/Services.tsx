import { Row, Col, Card, Typography, Image } from 'antd'
import { useState } from 'react'
import videoCafe from '../assets/videos/Video-pratos-cafe.mp4'
import videoAlmoco from '../assets/videos/Video-almoco.mp4'
import videoHappyHour from '../assets/videos/Video-take-eventos.mp4'
import videoStore from '../assets/videos/Video-propaganda-store.mp4'
import imgCafe1 from '../assets/img/Foto-comida-cafe-brunch.PNG'
import imgCafe2 from '../assets/img/Foto-comidas-cafe.jpg'
import imgCafe3 from '../assets/img/Foto-promocao-cafe-manha.jpg'

const { Title, Paragraph } = Typography

export default function Services() {
  const [visibleGallery, setVisibleGallery] = useState<number | null>(null)
  
  const services = [
    {
      video: videoCafe,
      title: 'Café',
      description: 'Comece seu dia com nossos cafés especiais e delícias da manhã',
      images: [imgCafe1, imgCafe2, imgCafe3]
    },
    {
      video: videoAlmoco,
      title: 'Almoço',
      description: 'Pratos saborosos e variados para sua pausa do dia',
      images: []
    },
    {
      video: videoHappyHour,
      title: 'Happy Hour',
      description: 'Drinks especiais e petiscos para relaxar com os amigos',
      images: []
    },
    {
      video: videoStore,
      title: 'Store',
      description: 'Onde você pode aproveitar nossos produtos exclusivos',
      images: []
    }
  ]

  return (
    <section id="services" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#213a36' }}>
          Nossos Serviços
        </Title>
        <Row gutter={[24, 24]}>
          {services.map((service, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <Card
                onClick={() => service.images.length > 0 && setVisibleGallery(index)}
                style={{ 
                  textAlign: 'center', 
                  height: '100%', 
                  borderRadius: 12, 
                  background: "#f9eac9",
                  cursor: service.images.length > 0 ? 'pointer' : 'default'
                }}
                cover={
                  <div style={{ padding: 0, background: '#f9eac9', height: 300, overflow: 'hidden', position: 'relative' }}>
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    >
                      <source src={service.video} type="video/mp4" />
                    </video>
                  </div>
                }
              >
                <Title style={{color: "#213a36"}} level={4}>{service.title}</Title>
                <Paragraph style={{color: "#213a36"}}>
                  {service.description}
                </Paragraph>
              </Card>

              {/* Hidden images for gallery */}
              {service.images.length > 0 && (
                <div style={{ display: 'none' }}>
                  <Image.PreviewGroup
                    preview={{
                      visible: visibleGallery === index,
                      onVisibleChange: (visible) => !visible && setVisibleGallery(null)
                    }}
                  >
                    {service.images.map((img, imgIndex) => (
                      <Image key={imgIndex} src={img} />
                    ))}
                  </Image.PreviewGroup>
                </div>
              )}
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
