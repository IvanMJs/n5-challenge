import styled, { css } from "styled-components"

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #312e81 0%, #6d28d9 50%, #db2777 100%);
  position: relative;
  overflow: hidden;
`;

export const AnimatedBackground = styled.div`
  position: absolute;
  inset: 0;
  animation: pulse 4s infinite;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export const ContentWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem;
  position: relative;
  z-index: 10;
`;

export const LanguageSwitcherContainer = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  .language-switcher {
    backdrop-filter: blur(8px);
    background: rgba(255,255,255,0.1);
    border-radius: 1rem;
    padding: 1rem;
    border: 1px solid rgba(255,255,255,0.2);
  }
`;

export const SectionGroup = styled.section`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionCard = styled.div<{variant?: string}>`
  backdrop-filter: blur(24px);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.15);
  background: ${({variant}) =>
    variant === "rick"
      ? "linear-gradient(to right, rgba(34,197,94,0.2), rgba(59,130,246,0.2))"
      : variant === "harry"
      ? "linear-gradient(to right, rgba(147,51,234,0.2), rgba(253,224,71,0.2))"
      : "rgba(255,255,255,0.05)"};
  transition: box-shadow 0.5s, border 0.5s, transform 0.5s;
  &:hover {
    box-shadow: ${({variant}) =>
      variant === "rick"
        ? "0 8px 32px 0 rgba(34,197,94,0.2)"
        : variant === "harry"
        ? "0 8px 32px 0 rgba(147,51,234,0.2)"
        : "0 8px 32px 0 rgba(31,38,135,0.15)"};
    border-color: ${({variant}) =>
      variant === "rick"
        ? "rgba(34,197,94,0.4)"
        : variant === "harry"
        ? "rgba(147,51,234,0.4)"
        : "rgba(255,255,255,0.2)"};
    transform: scale(1.02);
  }
`;

export const SectionIcon = styled.div<{variant?: string}>`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.15);
  font-size: 2rem;
  background: ${({variant}) =>
    variant === "rick"
      ? "linear-gradient(to right, #4ade80, #3b82f6)"
      : variant === "harry"
      ? "linear-gradient(to right, #a21caf, #fde047)"
      : "#fff"};
`;

export const SectionTitle = styled.h2<{variant?: string}>`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  color: #fff;
  transition: color 0.3s;
  ${({variant}) =>
    variant === "rick"
      ? css`
          .group:hover & {
            color: #86efac;
          }
        `
      : variant === "harry"
      ? css`
          .group:hover & {
            color: #fde047;
          }
        `
      : null}
`;

export const SectionDescription = styled.p`
  color: rgba(255,255,255,0.8);
  font-size: 1rem;
  max-width: 28rem;
`;

export const SectionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const SectionContentTransition = styled.div<{show: boolean}>`
  transition: all 0.7s;
  opacity: ${({show}) => (show ? 1 : 0)};
  max-height: ${({show}) => (show ? "1000px" : "0")};
  overflow: hidden;
`;

export const Footer = styled.footer`
  margin-top: 5rem;
  text-align: center;
  color: rgba(255,255,255,0.6);
  padding-bottom: 2rem;
`;

export const FooterContent = styled.div`
  backdrop-filter: blur(8px);
  background: rgba(255,255,255,0.05);
  border-radius: 1rem;
  padding: 1.5rem;
  margin: 0 1.5rem;
  border: 1px solid rgba(255,255,255,0.1);
  .footer__main {
    font-size: 1rem;
  }
  .footer__sub {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    opacity: 0.75;
  }
`; 