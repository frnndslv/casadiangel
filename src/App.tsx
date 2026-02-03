import { Layout, Menu, Typography } from 'antd'
import './App.css'
import logo from './assets/logo/logo-verde.svg'
import Hero from './views/Hero'
import Services from './views/Services'
import Events from './views/Events'
import About from './views/About'
import Gallery from './views/Gallery'
import Contact from './views/Contact'

const { Header, Content, Footer } = Layout
const { Text } = Typography

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 50
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
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
        zIndex: 99, 
        width: '100%', 
        background: '#c97338',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '0 16px',
        height: '120px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1200, margin: '0 auto', height: "120px" }}>
          <img src={logo} alt="Casa di Angel" style={{ height: 'clamp(40px, 8vw, 90px)', margin: '8px 0' }} />
          <Menu 
            mode="horizontal" 
            style={{ border: 'none', background: 'transparent', minWidth: 'auto' }}
            selectedKeys={[]}
          >
            <Menu.Item key="home" onClick={() => scrollToSection('home')} style={{ padding: '0 8px', fontSize:"20px" }}>Início</Menu.Item>
            <Menu.Item key="services" onClick={() => scrollToSection('services')} style={{ padding: '0 8px', fontSize:"20px"  }}>Serviços</Menu.Item>
            <Menu.Item key="about" onClick={() => scrollToSection('about')} style={{ padding: '0 8px', display: window.innerWidth < 576 ? 'none' : 'inline-block', fontSize:"20px" }}>Sobre</Menu.Item>
          </Menu>
        </div>
      </Header>

      <Content style={{ marginTop: 64 }}>
        <Hero 
          onReserveClick={() => scrollToSection('events')}
          onServicesClick={() => scrollToSection('services')}
        />
        <Services />
        <Events onWhatsAppClick={openWhatsApp} />
        <About />
        <Gallery />
        <Contact />
      </Content>

      <Footer style={{ textAlign: 'center', background: '#f9eac9', color: '#213a36', padding: '20px' }}>
        <Text style={{ color: '#213a36', fontSize: 'clamp(12px, 3vw, 14px)' }}>
          Casa di Angel © {new Date().getFullYear()} - Todos os direitos reservados
        </Text>
      </Footer>
    </Layout>
  )
}

export default App
