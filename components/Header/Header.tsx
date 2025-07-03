import { HeaderWrapper } from "./Header.styles"

interface HeaderProps {
  title: string
  subtitle: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <HeaderWrapper className="header">
      {/* Animated background */}
      <div className="header__background" />
      <div className="header__background-overlay" />
      {/* Floating particles */}
      <div className="header__particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="header__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="header__content">
        <h1 className="header__title">
          <span>{title}</span>
        </h1>
        <p className="header__subtitle">{subtitle}</p>
        {/* Decorative elements */}
        <div className="header__decor">
          <div className="header__dot yellow" />
          <div className="header__dot pink" />
          <div className="header__dot purple" />
        </div>
      </div>
    </HeaderWrapper>
  )
}
