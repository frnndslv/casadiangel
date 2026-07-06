import { Row, Col, Card, Typography } from 'antd'
import { ClockCircleOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const ADDRESS = 'Rua Gonçalves Dias, 308, Curitiba - PR, 80240-340'
const MAPS_QUERY = encodeURIComponent(ADDRESS)
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`
const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`

export default function Contact() {
  return (
    <section id="contact" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#c97338', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#213a36', fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
          Entre em Contato
        </Title>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card
              style={{ textAlign: 'center', borderRadius: 12, height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              styles={{ body: { padding: 0 } }}
            >
              <a
                href={MAPS_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', color: 'inherit' }}
              >
                <div style={{ position: 'relative', width: '100%', height: 140, borderRadius: '12px 12px 0 0', overflow: 'hidden' }}>
                  <iframe
                    src={MAPS_EMBED_URL}
                    style={{ width: '100%', height: '100%', border: 0, pointerEvents: 'none' }}
                    loading="lazy"
                    title="Mapa de localização"
                  />
                </div>
                <div style={{ padding: '16px 16px 20px' }}>
                  <EnvironmentOutlined style={{ fontSize: 'clamp(28px, 6vw, 36px)', color: '#a54d27', marginBottom: 8 }} />
                  <Title level={4} style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginBottom: 12 }}>Endereço</Title>
                  <Text style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Rua Gonçalves Dias, 308</Text><br />
                  <Text style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Paraná, Curitiba, 80240-340</Text>
                </div>
              </a>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card style={{ textAlign: 'center', borderRadius: 12, height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <PhoneOutlined style={{ fontSize: 'clamp(36px, 8vw, 48px)', color: '#a54d27', marginBottom: 16 }} />
              <Title level={4} style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginBottom: 12 }}>Telefone</Title>
              <Text style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>41 99152 0742</Text><br />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card style={{ textAlign: 'center', borderRadius: 12, height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <ClockCircleOutlined style={{ fontSize: 'clamp(36px, 8vw, 48px)', color: '#a54d27', marginBottom: 16 }} />
              <Title level={4} style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginBottom: 12 }}>Horário</Title>
              <Text style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Segunda a Sabado: 8h - 20h</Text><br />
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}
