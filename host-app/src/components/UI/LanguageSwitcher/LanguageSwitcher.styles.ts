import styled from "styled-components";

export const LanguageSwitcherContainer = styled.div`
  background: rgba(255,255,255,0.15);
  border-radius: 12px;
  padding: 12px 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  transition: box-shadow 0.7s cubic-bezier(.22,1,.36,1), border 0.5s;
  gap: 10px;

  &:hover {
    box-shadow:
      0 12px 56px 24px rgba(44,19,56,0.22),
      0 0px 40px 24px rgba(162,89,247,0.12);
    border-color: #b18fff;
  }

  .language-switcher__label {
    font-weight: 600;
    color: #fff;
    font-size: 1rem;
    margin-right: 8px;
    letter-spacing: 0.5px;
  }

  .language-switcher__select {
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background: rgba(255, 255, 255, 0.85);
    color: #333;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.2s, background 0.2s;
    outline: none;
    cursor: pointer;
    appearance: none;
    min-width: 120px;
  }
  .language-switcher__select:focus {
    box-shadow: 0 0 0 2px #764ba2;
    background: #fff;
  }
`;
