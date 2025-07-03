import {
  FloatingElementsWrapper,
  FloatingOrb,
  FloatingParticle
} from "./FloatingElements.styles"

export function FloatingElements() {
  return (
    <FloatingElementsWrapper>
      {/* Large floating orbs */}
      <FloatingOrb
        variant="purple"
        style={{}}
      />
      <FloatingOrb
        variant="blue"
        style={{ animationDelay: "1s" }}
      />
      <FloatingOrb
        variant="green"
        style={{ animationDelay: "2s" }}
      />
      <FloatingOrb
        variant="yellow"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Small floating particles */}
      {[...Array(15)].map((_, i) => (
        <FloatingParticle
          key={i}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </FloatingElementsWrapper>
  )
}
