import { Typography, Space, Button } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import videoBackground from '../assets/videos/Video-todasAsAreas.mp4'

const { Title, Paragraph } = Typography

interface HeroProps {
  onReserveClick: () => void
  onServicesClick: () => void
}

export default function Hero({ onReserveClick, onServicesClick }: HeroProps) {
  return (
    <section id="home" style={{
      position: 'relative',
      padding: '80px 20px 60px',
      textAlign: 'center',
      color: '#fff',
      marginTop: '55px',
      overflow: 'hidden',
      minHeight: '500px'
    }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src={videoBackground} type="video/mp4" />
      </video>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(33, 58, 54, 0.6)',
        zIndex: 1
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Title style={{ color: '#f9eac9', fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: 24, lineHeight: 1.2 }}>
          Bem-vindo à Casa di Angel
        </Title>
        <Paragraph style={{ color: '#f9eac9', fontSize: 'clamp(1rem, 4vw, 1.5rem)', marginBottom: 40, maxWidth: 800, margin: '0 auto 40px', padding: '0 10px' }}>
          Um espaço acolhedor para todas as ocasiões - do café da manhã ao jantar especial
        </Paragraph>
        <Space size="large" wrap style={{ justifyContent: 'center' }}>
          <Button 
            type="primary" 
            size="large" 
            icon={<CalendarOutlined />}
            style={{ background: '#f9eac9', color: '#213a36', borderColor: '#f9eac9', height: 'auto', fontSize: 'clamp(14px, 3vw, 18px)', padding: '12px 24px' }}
            onClick={onReserveClick}
          >
            Reserve Agora
          </Button>
          <Button 
            size="large" 
            ghost
            style={{ height: 'auto', fontSize: 'clamp(14px, 3vw, 18px)', padding: '12px 24px', borderColor: '#f9eac9', color: '#f9eac9' }}
            onClick={onServicesClick}
          >
            Nossos Serviços
          </Button>
        </Space>
      </div>
    </section>
  )
}
