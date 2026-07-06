import { Row, Col, Card, Typography } from 'antd'
import { ClockCircleOutlined, WhatsAppOutlined, EnvironmentOutlined, PhoneFilled } from '@ant-design/icons'

const { Title, Text } = Typography

const ADDRESS = 'Rua Gonçalves Dias, 308, Curitiba - PR, 80240-340'
const MAPS_QUERY = encodeURIComponent(ADDRESS)
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`
const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`
const WHATSAPP_NUMBER = '5541991520742'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
const PHONE_DISPLAY = '(41) 99152-0742'
const PHONE_CALL_URL = `tel:+${WHATSAPP_NUMBER}`

const CARD_HEIGHT = 320
const GREEN = '#213a36'

function isOpenNow() {
  const now = new Date()
  const day = now.getDay() // 0 = domingo
  if (day === 0) return false
  const minutes = now.getHours() * 60 + now.getMinutes()
  return minutes >= 8 * 60 && minutes < 20 * 60
}

const cardStyle: React.CSSProperties = {
  textAlign: 'center',
  borderRadius: 12,
  height: CARD_HEIGHT,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
}

const bodyStyle: React.CSSProperties = { padding: 0, height: '100%', display: 'flex', flexDirection: 'column' }

const titleStyle: React.CSSProperties = {
  fontSize: 'clamp(16px, 3.5vw, 20px)',
  fontWeight: 700,
  color: GREEN,
  marginBottom: 10,
}

const iconCircle = (
  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(249, 234, 201, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <ClockCircleOutlined style={{ fontSize: 28, color: '#f9eac9' }} />
  </div>
)

export default function Contact() {
  const open = isOpenNow()
  return (
    <section id="contact" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#c97338', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#213a36', fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
          Entre em Contato
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {/* Endereço */}
          <Col xs={24} sm={12} md={8}>
            <Card style={cardStyle} styles={{ body: bodyStyle }}>
              <a
                href={MAPS_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', flexDirection: 'column', height: '100%', color: 'inherit' }}
              >
                <div style={{ flex: '0 0 50%', position: 'relative', overflow: 'hidden' }}>
                  <iframe
                    src={MAPS_EMBED_URL}
                    style={{ width: '100%', height: '100%', border: 0, pointerEvents: 'none' }}
                    loading="lazy"
                    title="Mapa de localização"
                  />
                </div>
                <div style={{ flex: '1 1 50%', padding: '16px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <EnvironmentOutlined style={{ fontSize: 24, color: GREEN, marginBottom: 8 }} />
                  <div style={titleStyle}>Endereço</div>
                  <Text style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: GREEN }}>Rua Gonçalves Dias, 308</Text>
                  <Text style={{ fontSize: 'clamp(12px, 3vw, 14px)', color: GREEN }}>Paraná, Curitiba, 80240-340</Text>
                </div>
              </a>
            </Card>
          </Col>

          {/* Telefone */}
          <Col xs={24} sm={12} md={8}>
            <Card style={cardStyle} styles={{ body: bodyStyle }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ flex: '0 0 50%', background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(249, 234, 201, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <WhatsAppOutlined style={{ fontSize: 28, color: '#f9eac9' }} />
                </div>
              </a>
              <div style={{ flex: '1 1 50%', padding: '16px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={titleStyle}>Telefone</div>
                <Text style={{ fontSize: 'clamp(13px, 3vw, 15px)', fontWeight: 600, color: '#a54d27', marginBottom: 12 }}>{PHONE_DISPLAY}</Text>
                <a
                  href={PHONE_CALL_URL}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#c97338',
                    color: '#fff',
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    padding: '10px 24px',
                    borderRadius: 999,
                    marginTop: 'auto',
                  }}
                >
                  <PhoneFilled style={{ fontSize: 14 }} />
                  LIGAR AGORA
                </a>
              </div>
            </Card>
          </Col>

          {/* Horário */}
          <Col xs={24} sm={12} md={8}>
            <Card style={cardStyle} styles={{ body: bodyStyle }}>
              <div style={{ flex: '0 0 50%', background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {iconCircle}
              </div>
              <div style={{ flex: '1 1 50%', padding: '14px 20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
                <div style={{ ...titleStyle, marginBottom: 8 }}>Horário</div>
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid rgba(33, 58, 54, 0.12)' }}>
                    <Text style={{ fontSize: 'clamp(11px, 2.6vw, 13px)', fontWeight: 700, color: '#a54d27' }}>Segunda – Sábado</Text>
                    <Text style={{ fontSize: 'clamp(11px, 2.6vw, 13px)', fontWeight: 700, color: '#a54d27' }}>8h – 20h</Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                    <Text style={{ fontSize: 'clamp(11px, 2.6vw, 13px)', color: '#999' }}>Domingo</Text>
                    <Text style={{ fontSize: 'clamp(11px, 2.6vw, 13px)', color: '#999' }}>Fechado</Text>
                  </div>
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    background: open ? '#c97338' : '#8a8a8a',
                    color: '#fff',
                    fontWeight: 700,
                    letterSpacing: 0.5,
                    padding: '10px 24px',
                    borderRadius: 999,
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    marginTop: 'auto',
                  }}
                >
                  {open ? '✓ Aberto agora' : '✕ Fechado agora'}
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}
