import { Layout, Menu, Button, Row, Col, Card, Typography, Space, Divider } from 'antd'
import { CoffeeOutlined, ClockCircleOutlined, PhoneOutlined, EnvironmentOutlined, CalendarOutlined, WhatsAppOutlined } from '@ant-design/icons'
import './App.css'

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const openWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=5541991520742&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <Layout>
      <Header style={{ 
        position: 'fixed', 
        zIndex: 1, 
        width: '100%', 
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '0 16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>
          <Title level={3} style={{ margin: '12px 0', color: '#8B4513', fontSize: 'clamp(1.2rem, 5vw, 1.5rem)' }}>Casa di Angel</Title>
          <Menu mode="horizontal" style={{ border: 'none', background: 'transparent', minWidth: 'auto' }}>
            <Menu.Item key="home" onClick={() => scrollToSection('home')} style={{ padding: '0 8px' }}>Início</Menu.Item>
            <Menu.Item key="services" onClick={() => scrollToSection('services')} style={{ padding: '0 8px' }}>Serviços</Menu.Item>
            <Menu.Item key="about" onClick={() => scrollToSection('about')} style={{ padding: '0 8px', display: window.innerWidth < 576 ? 'none' : 'inline-block' }}>Sobre</Menu.Item>
          </Menu>
        </div>
      </Header>

      <Content style={{ marginTop: 64 }}>
        <section id="home" style={{
          background: 'linear-gradient(135deg, #D4A574 0%, #8B4513 100%)',
          padding: '80px 20px 60px',
          textAlign: 'center',
          color: '#fff'
        }}>
          <Title style={{ color: '#fff', fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: 24, lineHeight: 1.2 }}>
            Bem-vindo à Casa di Angel
          </Title>
          <Paragraph style={{ color: '#fff', fontSize: 'clamp(1rem, 4vw, 1.5rem)', marginBottom: 40, maxWidth: 800, margin: '0 auto 40px', padding: '0 10px' }}>
            Um espaço acolhedor para todas as ocasiões - do café da manhã ao jantar especial
          </Paragraph>
          <Space size="large" wrap style={{ justifyContent: 'center' }}>
            <Button 
              type="primary" 
              size="large" 
              icon={<CalendarOutlined />}
              style={{ background: '#fff', color: '#8B4513', borderColor: '#fff', height: 'auto', fontSize: 'clamp(14px, 3vw, 18px)', padding: '12px 24px' }}
              onClick={() => scrollToSection('contact')}
            >
              Reserve Agora
            </Button>
            <Button 
              size="large" 
              ghost
              style={{ height: 'auto', fontSize: 'clamp(14px, 3vw, 18px)', padding: '12px 24px', borderColor: '#fff', color: '#fff' }}
              onClick={() => scrollToSection('services')}
            >
              Nossos Serviços
            </Button>
          </Space>
        </section>

        <section id="services" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#8B4513' }}>
              Nossos Serviços
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  hoverable
                  style={{ textAlign: 'center', height: '100%', borderRadius: 12 }}
                  cover={<div style={{ padding: 40, background: '#FFF8DC' }}>
                    <CoffeeOutlined style={{ fontSize: 60, color: '#8B4513' }} />
                  </div>}
                >
                  <Title level={4}>Café</Title>
                  <Paragraph>
                    Comece seu dia com nossos cafés especiais e delícias da manhã
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  hoverable
                  style={{ textAlign: 'center', height: '100%', borderRadius: 12 }}
                  cover={<div style={{ padding: 40, background: '#FFF8DC' }}>
                    <ClockCircleOutlined style={{ fontSize: 60, color: '#8B4513' }} />
                  </div>}
                >
                  <Title level={4}>Almoço</Title>
                  <Paragraph>
                    Pratos saborosos e variados para sua pausa do dia
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  hoverable
                  style={{ textAlign: 'center', height: '100%', borderRadius: 12 }}
                  cover={<div style={{ padding: 40, background: '#FFF8DC' }}>
                    <CoffeeOutlined style={{ fontSize: 60, color: '#8B4513' }} />
                  </div>}
                >
                  <Title level={4}>Happy Hour</Title>
                  <Paragraph>
                    Drinks especiais e petiscos para relaxar com os amigos
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  hoverable
                  style={{ textAlign: 'center', height: '100%', borderRadius: 12 }}
                  cover={<div style={{ padding: 40, background: '#FFF8DC' }}>
                    <CalendarOutlined style={{ fontSize: 60, color: '#8B4513' }} />
                  </div>}
                >
                  <Title level={4}>Jantar</Title>
                  <Paragraph>
                    Experiência gastronômica única para momentos especiais
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        <section style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#FFF8DC' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} md={12}>
                <div style={{ 
                  height: 'clamp(250px, 50vw, 400px)', 
                  background: 'linear-gradient(135deg, #D4A574 0%, #8B4513 100%)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CalendarOutlined style={{ fontSize: 'clamp(60px, 15vw, 120px)', color: '#fff' }} />
                </div>
              </Col>
              <Col xs={24} md={12}>
                <Title level={2} style={{ color: '#8B4513', marginBottom: 24, fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
                  Eventos Especiais
                </Title>
                <Paragraph style={{ fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: 24 }}>
                  A Casa di Angel é o local perfeito para seus eventos especiais. 
                  Oferecemos um ambiente acolhedor e sofisticado para celebrações, 
                  reuniões corporativas, aniversários e muito mais.
                </Paragraph>
                <ul style={{ fontSize: 'clamp(14px, 3vw, 16px)', lineHeight: 2, marginLeft: '18px' }}>
                  <li>Capacidade para grupos de todos os tamanhos</li>
                  <li>Cardápio personalizado</li>
                  <li>Ambiente climatizado</li>
                  <li>Decoração sob medida</li>
                </ul>
                <Button 
                  type="primary" 
                  size="large"
                  icon={<WhatsAppOutlined />}
                  style={{ marginTop: 24, background: '#8B4513', borderColor: '#8B4513', height: 'auto', padding: '12px 24px', fontSize: 'clamp(14px, 3vw, 16px)' }}
                  onClick={() => openWhatsApp()}
                >
                  Solicite um Orçamento
                </Button>
              </Col>
            </Row>
          </div>
        </section>

        <section id="about" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#fff' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <Title level={2} style={{ color: '#8B4513', marginBottom: 30, fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
              Sobre Nós
            </Title>
            <Paragraph style={{ fontSize: 'clamp(14px, 3vw, 18px)', lineHeight: 1.8 }}>
              A Casa di Angel nasceu do sonho de criar um espaço onde as pessoas possam 
              se sentir em casa, independentemente do momento do dia. Oferecemos desde o 
              café da manhã acolhedor até jantares sofisticados, sempre com o mesmo 
              carinho e atenção aos detalhes.
            </Paragraph>
            <Divider />
            <Paragraph style={{ fontSize: 'clamp(14px, 3vw, 18px)', lineHeight: 1.8 }}>
              Nossa equipe é dedicada a proporcionar experiências memoráveis, seja em 
              uma visita casual ou em eventos especiais. Cada prato é preparado com 
              ingredientes selecionados e muito amor.
            </Paragraph>
          </div>
        </section>

        <section id="contact" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#8B4513', color: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 50px)', color: '#fff', fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
              Entre em Contato
            </Title>
            <Row gutter={[24, 24]} justify="center">
              <Col xs={24} sm={12} md={8}>
                <Card style={{ textAlign: 'center', borderRadius: 12, height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <EnvironmentOutlined style={{ fontSize: 'clamp(36px, 8vw, 48px)', color: '#8B4513', marginBottom: 16 }} />
                  <Title level={4} style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginBottom: 12 }}>Endereço</Title>
                  <Text style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Rua Golçalves Dias, 308</Text><br />
                  <Text style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Paraná, Curitiba, 80240-340</Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card style={{ textAlign: 'center', borderRadius: 12, height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <PhoneOutlined style={{ fontSize: 'clamp(36px, 8vw, 48px)', color: '#8B4513', marginBottom: 16 }} />
                  <Title level={4} style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginBottom: 12 }}>Telefone</Title>
                  <Text style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>41 99152 0742</Text><br />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card style={{ textAlign: 'center', borderRadius: 12, height: '100%', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <ClockCircleOutlined style={{ fontSize: 'clamp(36px, 8vw, 48px)', color: '#8B4513', marginBottom: 16 }} />
                  <Title level={4} style={{ fontSize: 'clamp(16px, 4vw, 20px)', marginBottom: 12 }}>Horário</Title>
                  <Text style={{ fontSize: 'clamp(12px, 3vw, 14px)' }}>Segunda a Sabado: 8h - 20h</Text><br />
                </Card>
              </Col>
            </Row>
          </div>
        </section>
      </Content>

      <Footer style={{ textAlign: 'center', background: '#2c1810', color: '#fff', padding: '20px' }}>
        <Text style={{ color: '#fff', fontSize: 'clamp(12px, 3vw, 14px)' }}>
          Casa di Angel © {new Date().getFullYear()} - Todos os direitos reservados
        </Text>
      </Footer>
    </Layout>
  )
}

export default App
