import { Row, Col, Card, Typography, Button, Carousel, Image } from 'antd'
import { LinkOutlined } from '@ant-design/icons'

import caipirinha1 from '../assets/img/novas-fotos/Casa Di Angels-1º Picole de Limão com gingibre-8077.jpg'
import caipirinha2 from '../assets/img/novas-fotos/Casa Di Angels-3º Framboesa, Maracujá-Concurso-8086.jpg'
import vinho1 from '../assets/img/vinhos/vinho-bobbejaan-shiraz.png'
import vinho2 from '../assets/img/vinhos/vinho-rose-thera.png'
import vinho3 from '../assets/img/vinhos/vinho-branco-el-mendocino.png'
import vinho4 from '../assets/img/vinhos/vinho-branco-las-perdices.png'
import vinho5 from '../assets/img/vinhos/espumante-panizzon.png'
import vinho6 from '../assets/img/vinhos/vinho-verde-minha-adega.png'
import vinho7 from '../assets/img/vinhos/vinho-majolica-pecorino.png'
import parmegiana1 from '../assets/img/novas-fotos/22-casa-di-angel-0043.jpg'
import parmegiana2 from '../assets/img/novas-fotos/21-casa-di-angel-0042.jpg'
import especialidade1 from '../assets/img/especialidade/baguete australiana com camarao e creamchease.png'
import especialidade2 from '../assets/img/especialidade/baguete com brie e figos.png'
import especialidade3 from '../assets/img/especialidade/baguete-com-gorgonzola-pera-noses-meladobragatina.png'
import especialidade4 from '../assets/img/especialidade/ciabata com nectarina greclhadas e presunto parma.png'
import especialidade5 from '../assets/img/especialidade/ciabata-com-frangogrelhado-manga-e rucula.png'
import sobremesa1 from '../assets/img/sobremesas/Sem título.png'
import sobremesa2 from '../assets/img/sobremesas/Sem flanf.png'
import sobremesa3 from '../assets/img/sobremesas/Sem sdfjbasijd.png'
import sobremesa4 from '../assets/img/sobremesas/acfs.png'
import sobremesa5 from '../assets/img/sobremesas/asifbawi.png'
import cafemanha1 from '../assets/img/Foto-comida-cafe-brunch.PNG'
import cafemanha2 from '../assets/img/Foto-comidas-cafe.jpg'
import cafemanha3 from '../assets/img/Foto-promocao-cafe-manha.jpg'
import cafemanha4 from '../assets/img/cafedamnah/ASDa.png'
import cafemanha5 from '../assets/img/cafedamnah/Sem título.png'
import cafemanha6 from '../assets/img/cafedamnah/asd.png'
import cafemanha7 from '../assets/img/cafedamnah/asefwef.png'

const { Title, Paragraph } = Typography

const CARDAPIO_URL = 'https://cardapioweb.dalcatech.com.br/?54136232000109--9--estatico'

interface Highlight {
  title: string
  description: string
  images: string[]
}

const placeholderCoverStyle = {
  height: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#213a36',
  color: '#f9eac9',
  fontSize: 16,
  textAlign: 'center' as const,
  padding: 16,
}

export default function Menu() {
  const highlights: Highlight[] = [
    {
      title: 'Drinks Especiais',
      description: 'Nossa campeã: eleita Melhor Caipirinha na 3ª edição do Circuito de Caipirinhas da Curitiba Honesta',
      images: [caipirinha1, caipirinha2],
    },
    {
      title: 'Vinhos',
      description: 'Seleção especial de rótulos para harmonizar com cada momento',
      images: [vinho1, vinho2, vinho3, vinho4, vinho5, vinho6, vinho7],
    },
    {
      title: 'Massas',
      description: 'Massas generosas, com muito queijo e molho caseiro',
      images: [parmegiana1, parmegiana2],
    },
    {
      title: 'Confeitaria',
      description: 'Bolos e tortas feitos com carinho pela nossa confeitaria',
      images: [sobremesa1, sobremesa2, sobremesa3, sobremesa4, sobremesa5],
    },
    {
      title: 'Especialidades da Casa',
      description: 'Pratos que são a assinatura da Casa di Angel',
      images: [especialidade1, especialidade2, especialidade3, especialidade4, especialidade5],
    },
    {
      title: 'Café da Manhã',
      description: 'Um café da manhã completo para começar bem o dia',
      images: [cafemanha1, cafemanha2, cafemanha3, cafemanha4, cafemanha5, cafemanha6, cafemanha7],
    },
  ]

  return (
    <section id="menu" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#f9eac9' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 16, color: '#213a36', fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
          Cardápio
        </Title>
        <Paragraph style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto', fontSize: 'clamp(14px, 3vw, 18px)', color: '#213a36' }}>
          Drinks especiais, vinhos selecionados e pratos que são a cara da Casa di Angel
        </Paragraph>

        <div style={{ textAlign: 'center', margin: '20px 0 clamp(30px, 6vw, 50px)' }}>
          <Button
            type="primary"
            size="large"
            icon={<LinkOutlined />}
            href={CARDAPIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#213a36', borderColor: '#213a36', height: 'auto', padding: '12px 24px', fontSize: 'clamp(14px, 3vw, 16px)', color: '#f9eac9' }}
          >
            Ver Cardápio Completo
          </Button>
        </div>

        <Row gutter={[24, 24]}>
          {highlights.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card
                style={{ textAlign: 'center', height: '100%', borderRadius: 12, background: '#fff', overflow: 'hidden' }}
                cover={
                  item.images.length > 0 ? (
                    <Image.PreviewGroup items={item.images}>
                      <Carousel autoplay effect="fade" style={{ height: 300 }}>
                        {item.images.map((img, imgIndex) => (
                          <div key={imgIndex}>
                            <div style={{ height: 300, overflow: 'hidden' }}>
                              <Image
                                src={img}
                                alt={item.title}
                                width="100%"
                                height="100%"
                                style={{ objectFit: 'cover' }}
                                wrapperStyle={{ width: '100%', height: '100%' }}
                              />
                            </div>
                          </div>
                        ))}
                      </Carousel>
                    </Image.PreviewGroup>
                  ) : (
                    <div style={placeholderCoverStyle}>Fotos em breve</div>
                  )
                }
              >
                <Title level={4} style={{ color: '#213a36' }}>{item.title}</Title>
                <Paragraph style={{ color: '#213a36' }}>{item.description}</Paragraph>
                <Button
                  type="primary"
                  icon={<LinkOutlined />}
                  href={CARDAPIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: '#213a36', borderColor: '#213a36', color: '#f9eac9' }}
                >
                  Ver Mais
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}
