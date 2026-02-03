import { Row, Col, Typography, Button } from 'antd'
import { WhatsAppOutlined } from '@ant-design/icons'
import videoEventos from '../assets/videos/Video-ambientes-internos.mp4'

const { Title, Paragraph } = Typography

interface EventsProps {
  onWhatsAppClick: () => void
}

export default function Events({ onWhatsAppClick }: EventsProps) {
  return (
    <section id="events" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#f9eac9' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <div style={{ 
              height: 'clamp(250px, 50vw, 400px)', 
              background: 'linear-gradient(135deg, #c97338 0%, #a54d27 100%)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 10,
                }}
              >
                <source src={videoEventos} type="video/mp4" />
              </video>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Title level={2} style={{ color: '#213a36', marginBottom: 24, fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
              Espaços para Eventos
            </Title>
            <Paragraph style={{ fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: 24, color: '#213a36' }}>
              A Casa di Angel é o local perfeito para seus eventos especiais. 
              Oferecemos um ambiente acolhedor e sofisticado para celebrações, 
              reuniões corporativas, aniversários e muito mais.
            </Paragraph>
            <ul style={{ fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: 2, marginLeft: '18px' }}>
              <li style={{ color: '#213a36'}}>Capacidade para grupos de todos os tamanhos</li>
              <li style={{ color: '#213a36'}}>Cardápio personalizado</li>
              <li style={{ color: '#213a36'}}>Ambiente climatizado</li>
              <li style={{ color: '#213a36'}}>Estacionamento privativo</li>
            </ul>
            <Button 
              type="primary" 
              size="large"
              icon={<WhatsAppOutlined />}
              style={{ marginTop: 24, background: '#213a36', borderColor: '#213a36', height: 'auto', padding: '12px 24px', fontSize: 'clamp(14px, 3vw, 16px)',  color: '#f9eac9 ' }}
              onClick={onWhatsAppClick}
            >
              Faça sua Reserva
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  )
}
