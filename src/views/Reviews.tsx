import { Carousel, Typography } from 'antd'
import { StarFilled } from '@ant-design/icons'

const { Title, Paragraph } = Typography

type Review = {
  name: string
  initial: string
  color: string
  meta: string
  date: string
  tag: string
  text: string
}

const reviews: Review[] = [
  {
    name: 'Alejandra Maldonado',
    initial: 'A',
    color: '#c97338',
    meta: 'Local Guide · 14 avaliações',
    date: '4 meses atrás',
    tag: 'Outro · R$ 40-60',
    text: 'Achei o lugar simplesmente encantador! O ambiente é muito fofo e acolhedor. Pedi uma quiche que estava deliciosa e, de sobremesa, um brownie simplesmente perfeito!'
  },
  {
    name: 'Matheus Bonfim Picussa',
    initial: 'M',
    color: '#213a36',
    meta: '6 avaliações',
    date: 'um ano atrás',
    tag: 'Almoço · R$ 40-60',
    text: '"Prazer", de fato, é a palavra que define o sentimento de visitar a Casa di Angel. Fui com alguns amigos para almoçar e simplesmente voltamos encantados. O ambiente é climatizado e agradável.'
  },
  {
    name: 'Edi Suzano Edi',
    initial: 'E',
    color: '#a54d27',
    meta: 'Local Guide · 52 avaliações',
    date: '4 meses atrás',
    tag: 'Café da manhã · R$ 20-40',
    text: 'Amo conhecer cafeteria e essa me surpreendeu em tudo. Pensa em um lugar aconchegante e limpo. Maravilhoso! Foi uma experiência maravilhosa e com certeza vou voltar mais vezes.'
  },
  {
    name: 'Selva Regina Wolf Wahrhaftig',
    initial: 'S',
    color: '#c97338',
    meta: 'Local Guide · 2 avaliações',
    date: '6 meses atrás',
    tag: 'Brunch · R$ 20-40',
    text: 'Local super agradável, com bonita decoração, atendimento bom e pratos muito deliciosos, principalmente os bolos. O atendimento da Débora em especial nos cativou, levando-nos a promover outros encontros com amigas!'
  },
  {
    name: 'Marcos Czar',
    initial: 'M',
    color: '#213a36',
    meta: 'Local Guide · 17 avaliações',
    date: '7 meses atrás',
    tag: 'Café da manhã · R$ 20-40',
    text: 'Lugar é sensacional, sem palavras. A comida é muito boa. Perfeito para fazer um evento ou um encontro de networking. O suporte e atenção da equipe foi incrível.'
  },
  {
    name: 'Viviane Barcellos',
    initial: 'V',
    color: '#a54d27',
    meta: 'Local Guide · 39 avaliações',
    date: '10 meses atrás',
    tag: 'Café da manhã · R$ 40-60',
    text: 'Um encanto de lugar! A Casa di Angel é linda, super instagramável e com um clima acolhedor que faz a gente querer ficar horas. O café da manhã é saboroso, bem servido e preparado com carinho.'
  },
  {
    name: 'Ana Prati',
    initial: 'A',
    color: '#c97338',
    meta: 'Local Guide · 101 avaliações',
    date: 'um ano atrás',
    tag: 'Jantar · R$ 60-80',
    text: 'Fui com amigos e familiares experimentar o buffet de sopas. Todas estavam muito boas! Não sei se cada dia tem um cardápio diferente, mas no dia que fui a variedade estava ótima.'
  },
  {
    name: 'Leonardo',
    initial: 'L',
    color: '#213a36',
    meta: 'Local Guide · 19 avaliações',
    date: '2 meses atrás',
    tag: 'Café da manhã · R$ 40-60',
    text: 'Experiência maravilhosa na Casa di Angel! O ambiente é encantador, com uma fachada linda e muito bom gosto na decoração. Pedimos um café da manhã completo com ovos mexidos, bacon e pães artesanais impecáveis.'
  },
  {
    name: 'Andre Soares',
    initial: 'A',
    color: '#a54d27',
    meta: 'Local Guide · 26 avaliações',
    date: 'um mês atrás',
    tag: 'Almoço · R$ 80-100',
    text: 'Casa pequena e aconchegante. Lugar bem iluminado com um toque sofisticado. A vitrine de bolos na entrada é só um chamariz para o que servem na casa. Fechei com chave de ouro.'
  }
]

const Stars = ({ count = 5 }: { count?: number }) => (
  <div style={{ display: 'flex', gap: 2 }}>
    {Array.from({ length: count }).map((_, i) => (
      <StarFilled key={i} style={{ color: '#f5b301', fontSize: 14 }} />
    ))}
  </div>
)

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#f9eac9' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', textAlign: 'center' }}>
        <Title level={2} style={{ color: '#213a36', marginBottom: 10, fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
          Avaliações
        </Title>
        <Paragraph style={{ fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: 8, color: '#213a36' }}>
          O que nossos clientes dizem sobre a Casa di Angel
        </Paragraph>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 36,
            flexWrap: 'wrap'
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 700, color: '#213a36' }}>5,0</span>
          <Stars />
          <span style={{ fontSize: 14, color: '#5a5348' }}>· 660 avaliações no Google</span>
        </div>

        <Carousel
          className="reviews-carousel"
          autoplay
          infinite
          arrows
          dots={false}
          centerMode
          centerPadding="0px"
          slidesToShow={3}
          slidesToScroll={1}
          speed={500}
          responsive={[
            { breakpoint: 992, settings: { slidesToShow: 2, centerPadding: '0px' } },
            { breakpoint: 576, settings: { slidesToShow: 1, centerPadding: '0px' } }
          ]}
        >
          {reviews.map((review, index) => (
            <div key={index} className="review-slide" style={{ padding: '0 12px' }}>
              <div
                style={{
                  height: 210,
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#fffaf0',
                  borderRadius: 16,
                  boxShadow: '0 4px 16px rgba(33,58,54,0.12)',
                  transition: 'box-shadow 0.4s ease',
                  padding: '18px 24px',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: review.color,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: 18,
                      flexShrink: 0
                    }}
                  >
                    {review.initial}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontWeight: 700,
                        color: '#213a36',
                        fontSize: 15,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {review.name}
                    </div>
                    <div style={{ fontSize: 12, color: '#8a8272' }}>{review.meta}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <Stars />
                  <span style={{ fontSize: 12, color: '#8a8272' }}>{review.date}</span>
                </div>

                <Paragraph
                  style={{
                    color: '#3d4a47',
                    fontSize: 13,
                    lineHeight: 1.5,
                    margin: 0,
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {review.text}
                </Paragraph>

                <div
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: '#a54d27',
                    fontWeight: 600
                  }}
                >
                  {review.tag}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
