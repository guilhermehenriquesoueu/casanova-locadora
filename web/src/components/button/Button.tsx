import './Button.css'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  icon?: JSX.Element
  text: string
  fontSize?: string
  backgroundColor?: string
  color?: string
  border?: string
  borderRadius?: string
  margin?: string
  width?: string
  height?: string
  transition?: string
  cursor?: string
  hoverBackgroundColor?: string
  hoverColor?: string
  hoverTransition?: string
  onClick?: { f: (event: any) => void; p: object }
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
  onClick
}: ButtonProps) {
  return (
    <>
      <button
        style={{
          width: `${width}`,
          height: `${height}`,
          fontSize: `${fontSize}`,
          backgroundColor: `${backgroundColor}`,
          color: `${color}`
        }}
        type={type}
        onClick={() => onClick?.f(onClick?.p)}
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
    </>
  )
}
