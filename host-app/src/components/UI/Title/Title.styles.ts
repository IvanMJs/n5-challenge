import styled, { keyframes, css } from "styled-components";

export const Title = styled.h1`
  &.app-title {
    font-size: 4rem;
    font-weight: 900;
    background: linear-gradient(90deg, #ffe066 20%, #f783ac 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
    margin-bottom: 16px;
    letter-spacing: 1px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  &.app-title__subtitle {
    font-size: 2rem;
    color: #e3e3e3;
    font-weight: 400;
    margin-bottom: 24px;
    text-align: center;
  }
`;

export const DotsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  background-image: repeating-radial-gradient(
    circle,
    rgba(255, 255, 255, 0.15) 2px,
    transparent 6px
  );
  background-size: 40px 40px;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 340px;
  z-index: 0;
  background: linear-gradient(135deg, #3a8dde 0%, #6e4ff7 40%, #00c3ff 100%);
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: repeating-radial-gradient(
      circle,
      rgba(255, 255, 255, 0.13) 2px,
      transparent 8px
    );
    background-size: 36px 36px;
    opacity: 0.7;
    pointer-events: none;
  }
`;

export const SVGBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background: none;
  svg {
    width: 100vw;
    height: 100%;
    display: block;
  }
`;

export const SVGHeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  height: 340px;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(90deg, #a259f7 0%, #3ac6fd 60%, #1de9b6 100%);
  overflow: hidden;
  svg {
    width: 100vw;
    max-width: 100%;
    height: 340px;
    min-width: 100%;
    display: block;
  }
`;

export const SVGSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(135deg, #a259f7 0%, #7b2ff2 80%, #f357a8 100%);
  overflow: hidden;
  svg {
    width: 100vw;
    max-width: 100%;
    height: 100%;
    min-width: 100%;
    display: block;
  }
`;

export const CardSection = styled.section`
  border-radius: 28px;
  box-shadow: 0 8px 40px 0 rgba(44, 19, 56, 0.13);
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px);
  margin-bottom: 40px;
  padding: 44px 36px 36px 36px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
  transition: box-shadow 0.7s cubic-bezier(.22,1,.36,1), border 0.5s;
  @media (max-width: 1200px) {
    max-width: 98vw;
  }
  @media (max-width: 900px) {
    padding: 32px 16px 24px 16px;
  }
  @media (max-width: 600px) {
    padding: 18vw 4vw 8vw 4vw;
    border-radius: 18px;
    margin-bottom: 24px;
  }
 &:hover {
  box-shadow:
    0 8px 48px 16px rgba(44,19,56,0.22), /* más difusa y extendida */
    0 0px 32px 16px rgba(162,89,247,0.10);
  border-color: #b18fff;
}
`;

export const ResponsiveMain = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    padding: 0 4vw;
  }
`;

const wave = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

export const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 24px 0 0 0;
  z-index: 2;
  position: relative;
  .dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ffe066;
    opacity: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: background 0.3s;
    &.dot--active {
      background: #ffb347;
      animation: ${wave} 1s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
    }
  }
`;

export const SVGBodyDotsBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  svg {
    width: 100vw;
    height: 100vh;
    display: block;
    min-width: 100vw;
    min-height: 100vh;
  }
`;
