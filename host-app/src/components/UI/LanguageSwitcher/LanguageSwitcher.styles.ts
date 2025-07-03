import styled from "styled-components"

export const LanguageSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

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
    background: rgba(255,255,255,0.85);
    color: #333;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
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
