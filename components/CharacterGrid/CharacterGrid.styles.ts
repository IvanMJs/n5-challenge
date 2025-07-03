import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const GridWrapper = styled.div`
  &.character-grid__grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .animate-fade-in-up {
    animation: ${fadeInUp} 0.6s ease-out forwards;
  }
`;

export const LoadingWrapper = styled.div`
  &.character-grid__loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    .character-grid__spinner {
      position: relative;
      width: 4rem;
      height: 4rem;
      border: 4px solid rgba(255,255,255,0.3);
      border-top: 4px solid #fff;
      border-radius: 50%;
      animation: ${spin} 1s linear infinite;
    }
    .character-grid__spinner-secondary {
      position: absolute;
      inset: 0;
      width: 4rem;
      height: 4rem;
      border: 4px solid transparent;
      border-top: 4px solid #a78bfa;
      border-radius: 50%;
      animation: ${spin} 0.8s linear infinite reverse;
    }
    .character-grid__loading-text {
      margin-top: 1.5rem;
      font-size: 1.25rem;
      color: #f3f4f6;
      font-weight: 500;
      animation: pulse 1.5s infinite;
    }
    .character-grid__dots {
      display: flex;
      gap: 0.25rem;
      margin-top: 1rem;
      .character-grid__dot {
        width: 0.5rem;
        height: 0.5rem;
        background: rgba(255,255,255,0.6);
        border-radius: 50%;
        animation: ${bounce} 1s infinite;
        &:nth-child(2) { animation-delay: 0.1s; }
        &:nth-child(3) { animation-delay: 0.2s; }
      }
    }
  }
`;

export const ErrorWrapper = styled.div`
  &.character-grid__error {
    text-align: center;
    padding: 4rem 0;
    .character-grid__error-box {
      backdrop-filter: blur(8px);
      background: rgba(239, 68, 68, 0.2);
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 1rem;
      padding: 2rem;
      max-width: 28rem;
      margin: 0 auto;
      .character-grid__error-emoji {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      .character-grid__error-text {
        color: #fff;
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      .character-grid__retry-btn {
        background: linear-gradient(to right, #ef4444, #ec4899);
        color: #fff;
        padding: 0.75rem 1.5rem;
        border-radius: 0.75rem;
        font-weight: 600;
        font-size: 1rem;
        border: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        transition: background 0.3s, transform 0.3s;
        cursor: pointer;
        &:hover {
          background: linear-gradient(to right, #dc2626, #be185d);
          transform: scale(1.05);
        }
      }
    }
  }
`; 