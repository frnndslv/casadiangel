import { useState } from 'react'
import { ClockCircleOutlined, CloseOutlined } from '@ant-design/icons'

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      style={{
        position: 'relative',
        background: '#213a36',
        color: '#f9eac9',
        padding: '10px 40px',
        textAlign: 'center',
        fontSize: 'clamp(12px, 3vw, 15px)',
        marginTop: 56,
      }}
    >
      <ClockCircleOutlined style={{ marginRight: 8 }} />
      A partir de <strong>03/08/2026</strong>, novo horário de atendimento: Segunda a Sexta das <strong>10h às 19h</strong> e Sábado das <strong>9h às 19h</strong>.
      <CloseOutlined
        onClick={() => setVisible(false)}
        style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
      />
    </div>
  )
}
