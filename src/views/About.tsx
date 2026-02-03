import { Typography, Divider } from 'antd'

const { Title, Paragraph } = Typography

export default function About() {
  return (
    <section id="about" style={{ padding: 'clamp(40px, 10vw, 80px) 20px', background: '#fff' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <Title level={2} style={{ color: '#213a36', marginBottom: 30, fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
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
  )
}
