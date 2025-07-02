import styled from "styled-components"

export const LanguageSwitcherContainer = styled.div`
  &.language-switcher {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 16px 0;

    &__label {
      font-weight: 600;
      color: #333;
    }

    &__select {
      padding: 8px 12px;
      border: 2px solid #ddd;
      border-radius: 6px;
      background-color: white;
      font-size: 14px;
      cursor: pointer;
      transition: border-color 0.3s ease;

      &:hover {
        border-color: #007bff;
      }

      &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
      }
    }
  }
`
