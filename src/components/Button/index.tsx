import { ButtonConteiner, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children?: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonConteiner
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonConteiner>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
