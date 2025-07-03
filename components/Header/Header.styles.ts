import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

export const HeaderWrapper = styled.header`
  &.header {
    position: relative;
    overflow: hidden;
    .header__background {
      position: absolute;
      inset: 0;
      z-index: 0;
      background: linear-gradient(90deg, #8b5cf6 0%, #3b82f6 50%, #14b8a6 100%);
    }
    .header__background-overlay {
      position: absolute;
      inset: 0;
      z-index: 1;
      background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%);
    }
    .header__particle {
      position: absolute;
      width: 0.5rem;
      height: 0.5rem;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
      animation: ${pulse} 2s infinite;
    }
    .header__content {
      position: relative;
      z-index: 2;
      text-align: center;
      padding: 5rem 2rem;
    }
    .header__title {
      font-size: 3rem;
      font-weight: 900;
      margin-bottom: 1.5rem;
      color: #fff;
      span {
        background: linear-gradient(90deg, #fde047 0%, #f472b6 50%, #a78bfa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: ${pulse} 2s infinite;
      }
    }
    .header__subtitle {
      font-size: 1.25rem;
      font-weight: 300;
      color: #f3f4f6;
      max-width: 48rem;
      margin: 0 auto;
      line-height: 1.6;
    }
    .header__decor {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      gap: 1rem;
      .header__dot {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        animation: ${bounce} 1s infinite;
        &.yellow { background: #fde047; }
        &.pink { background: #f472b6; animation-delay: 0.1s; }
        &.purple { background: #a78bfa; animation-delay: 0.2s; }
      }
    }
  }
`; 