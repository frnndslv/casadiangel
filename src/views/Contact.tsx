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
            <Card
              style={{ textAlign: 'center', borderRadius: 12, height: '100%', minHeight: 200, overflow: 'hidden' }}
              styles={{ body: { padding: 0 } }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', color: 'inherit' }}
              >
                <div style={{ background: '#213a36', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(249, 234, 201, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <WhatsAppOutlined style={{ fontSize: 32, color: '#f9eac9' }} />
                  </div>
                </div>
                <div style={{ padding: '16px 16px 20px' }}>
                  <Title level={4} style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginBottom: 12, color: '#213a36' }}>Telefone</Title>
                </div>
              </a>
              <div style={{ padding: '0 16px 20px' }}>
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
                    marginBottom: 10,
                  }}
                >
                  <PhoneFilled style={{ fontSize: 14 }} />
                  LIGAR AGORA
                </a>
                <br />
                <Text style={{ fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 600, color: '#a54d27' }}>{PHONE_DISPLAY}</Text>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              style={{ textAlign: 'center', borderRadius: 12, height: '100%', minHeight: 340, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              styles={{ body: { padding: 0, height: '100%', display: 'flex', flexDirection: 'column' } }}
            >
              <div style={{ background: '#213a36', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(249, 234, 201, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ClockCircleOutlined style={{ fontSize: 32, color: '#f9eac9' }} />
                </div>
              </div>
              <div style={{ padding: '16px 20px 20px', fontFamily: 'Georgia, serif', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Title level={4} style={{ fontSize: 'clamp(18px, 4vw, 22px)', marginBottom: 16, color: '#213a36', fontFamily: 'Georgia, serif' }}>Horário</Title>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 8, borderBottom: '1px solid #eee' }}>
                  <Text style={{ fontSize: 'clamp(13px, 3vw, 15px)', fontWeight: 700, color: '#a54d27' }}>Segunda – Sábado</Text>
                  <Text style={{ fontSize: 'clamp(13px, 3vw, 15px)', fontWeight: 700, color: '#a54d27' }}>8h – 20h</Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
                  <Text style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: '#999' }}>Domingo</Text>
                  <Text style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: '#999' }}>Fechado</Text>
                </div>
                <Text style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', fontStyle: 'italic', color: '#213a36', display: 'block', marginTop: 12, marginBottom: 16 }}>
                  Para eventos sofisticados, horários especiais podem ser combinados sob medida
                </Text>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#213a36',
                    color: '#fff',
                    fontWeight: 600,
                    padding: '8px 20px',
                    borderRadius: 999,
                    fontSize: 'clamp(12px, 3vw, 14px)',
                  }}
                >
                  ✓ Aberto agora
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}
