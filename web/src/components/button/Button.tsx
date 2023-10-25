import { Link } from 'react-router-dom'
import './Button.css'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  icon?: JSX.Element
  text: string
  fontSize?: string
  backgroundColor?: string
  color?: string
  width?: string
  height?: string
  href?: string
  onClick?: { myFunction: (parameters: unknown) => void; parameters: unknown }
}

export default function Button({
  type,
  icon,
  text,
  fontSize,
  backgroundColor,
  color,
  width = '150px',
  height = '50px',
  onClick,
  href
}: ButtonProps) {
  // Renderiza o botão diretamente se href não estiver definido
  if (!href) {
    return (
      <button
        style={{
          width: `${width}`,
          height: `${height}`,
          fontSize: `${fontSize}`,
          backgroundColor: `${backgroundColor}`,
          color: `${color}`
        }}
        type={type}
        onClick={
          onClick ? () => onClick.myFunction(onClick.parameters) : undefined
        }
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icon}
          {text}
        </span>
      </button>
    )
  }

  // Caso contrário, renderiza o botão envolto em um Link
  return (
    <Link to={href}>
      <button
        style={{
          width: `${width}`,
          height: `${height}`,
          fontSize: `${fontSize}`,
          backgroundColor: `${backgroundColor}`,
          color: `${color}`
        }}
        type={type}
        onClick={
          onClick ? () => onClick.myFunction(onClick.parameters) : undefined
        }
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {icon}
          {text}
        </span>
      </button>
    </Link>
  )
}
