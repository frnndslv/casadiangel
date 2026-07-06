import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Row, Col, Typography, Image, Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { IconPlant, IconHomeHeart, IconSun } from '@tabler/icons-react'
import espacoVideo from '../assets/img/espaco.mp4'

const espacoImageModules = import.meta.glob('../assets/img/espaçoes/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const espacoImages = Object.keys(espacoImageModules)
  .sort()
  .map((path) => espacoImageModules[path])

const { Title, Paragraph } = Typography

interface GalleryProps {
  onReserveClick: () => void
}

function RevealTile({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`scroll-reveal${visible ? ' is-visible' : ''}`}>
      {children}
    </div>
  )
}

const VISIBLE_LIMIT = 8

export default function Gallery({ onReserveClick }: GalleryProps) {
  const [showAll, setShowAll] = useState(false)

  const highlights = [
    { Icon: IconPlant, color: '#4a7c59', text: 'Jardim externo com iluminação decorativa' },
    { Icon: IconHomeHeart, color: '#c97338', text: 'Ambientes internos aconchegantes' },
    { Icon: IconSun, color: '#e0a83e', text: 'Luz natural do fim de tarde' }
  ]

  const images = espacoImages.map((src) => ({ src, alt: 'Espaço Casa di Angel' }))
  const visibleImages = showAll ? images : images.slice(0, VISIBLE_LIMIT)
  const hasMore = images.length > VISIBLE_LIMIT

  return (
    <section style={{ padding: 'clamp(40px, 10vw, 90px) 20px', background: '#f9eac9', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: 'rgba(201, 115, 56, 0.08)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: 50 }}>
          <Title
            level={2}
            style={{ color: '#213a36', margin: 0, fontSize: 'clamp(1.8rem, 5vw, 2.6rem)' }}
          >
            Nossos espaços
          </Title>
        </div>

        <Row gutter={[48, 32]} align="middle" style={{ marginBottom: 48 }}>
          <Col xs={24} sm={12} md={10}>
            <div className="fade-in-up" style={{ maxWidth: 420, margin: '0 auto' }}>
              <video
                src={espacoVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  aspectRatio: '9 / 16',
                  objectFit: 'cover',
                  borderRadius: 16,
                  display: 'block',
                  boxShadow: '0 12px 30px rgba(33, 58, 54, 0.22)',
                }}
              />
            </div>
          </Col>
          <Col xs={24} sm={12} md={14} style={{ textAlign: 'left' }}>
            <div className="fade-in-up" style={{ maxWidth: 520, animationDelay: '0.15s' }}>
              <Paragraph
                style={{ fontSize: 'clamp(18px, 3.2vw, 24px)', color: '#213a36', margin: '0 0 36px', lineHeight: 1.6 }}
              >
                Cada canto da Casa di Angel foi pensado para acolher.
                <br />
                Jardim decorado, luzes suaves ao entardecer
                <br />
                e uma atmosfera que convida a ficar.
              </Paragraph>

              <div style={{ marginBottom: 40 }}>
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 20,
                      padding: '18px 0',
                      borderBottom: index < highlights.length - 1 ? '1px solid rgba(33, 58, 54, 0.12)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        minWidth: 50,
                        borderRadius: 12,
                        background: 'rgba(201, 115, 56, 0.14)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <item.Icon size={26} color={item.color} stroke={1.75} />
                    </div>
                    <span style={{ fontSize: 'clamp(16px, 3vw, 18px)', color: '#213a36' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                type="primary"
                size="large"
                iconPosition="end"
                icon={<ArrowRightOutlined />}
                style={{
                  background: '#c97338',
                  borderColor: '#c97338',
                  height: 'auto',
                  fontWeight: 600,
                  fontSize: 'clamp(15px, 3vw, 17px)',
                  padding: '14px 32px',
                  borderRadius: 30,
                }}
                onClick={onReserveClick}
              >
                Agende uma visita
              </Button>
            </div>
          </Col>
        </Row>

        <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: 32 }}>
          <Title
            level={3}
            style={{ color: '#213a36', margin: 0, fontSize: 'clamp(1.4rem, 4vw, 2rem)' }}
          >
            Ambientes completos
          </Title>
        </div>

        <Image.PreviewGroup>
          <Row gutter={[16, 16]}>
            {visibleImages.map((image, index) => (
              <Col xs={12} sm={6} key={index}>
                <RevealTile>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: '100%',
                      aspectRatio: '1 / 1',
                      objectFit: 'cover',
                      borderRadius: 8,
                      cursor: 'pointer',
                      display: 'block',
                    }}
                  />
                </RevealTile>
              </Col>
            ))}
          </Row>
        </Image.PreviewGroup>

        {hasMore && !showAll && (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Button
              size="large"
              onClick={() => setShowAll(true)}
              style={{
                borderColor: '#c97338',
                color: '#c97338',
                fontWeight: 600,
                height: 'auto',
                fontSize: 'clamp(14px, 3vw, 16px)',
                padding: '12px 28px',
                borderRadius: 30,
              }}
            >
              Ver galeria completa
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
