import styled, { keyframes, css } from "styled-components";

export const FloatingElementsWrapper = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const orbVariants = {
  purple: css`
    top: 5rem;
    left: 2.5rem;
    width: 8rem;
    height: 8rem;
    background: linear-gradient(to right, rgba(192,132,252,0.2), rgba(244,114,182,0.2));
  `,
  blue: css`
    top: 10rem;
    right: 5rem;
    width: 6rem;
    height: 6rem;
    background: linear-gradient(to right, rgba(96,165,250,0.2), rgba(20,184,166,0.2));
  `,
  green: css`
    bottom: 8rem;
    left: 25%;
    width: 10rem;
    height: 10rem;
    background: linear-gradient(to right, rgba(52,211,153,0.2), rgba(59,130,246,0.2));
  `,
  yellow: css`
    bottom: 5rem;
    right: 33%;
    width: 7rem;
    height: 7rem;
    background: linear-gradient(to right, rgba(253,224,71,0.2), rgba(251,191,36,0.2));
  `,
};

export const FloatingOrb = styled.div<{variant: "purple"|"blue"|"green"|"yellow"}>`
  position: absolute;
  border-radius: 9999px;
  filter: blur(24px);
  animation: ${pulse} 3s infinite;
  ${({variant}) => orbVariants[variant]}
`;

const ping = keyframes`
  0% { transform: scale(1); opacity: 1; }
  75%, 100% { transform: scale(2); opacity: 0; }
`;

export const FloatingParticle = styled.div`
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  background: rgba(255,255,255,0.4);
  border-radius: 9999px;
  animation: ${ping} 2s cubic-bezier(0, 0, 0.2, 1) infinite;
`; 