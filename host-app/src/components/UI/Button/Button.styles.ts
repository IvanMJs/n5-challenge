import styled, { keyframes, css } from "styled-components"

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-12px); }
  50% { transform: translateY(-8px); }
  70% { transform: translateY(-4px); }
`;

export const StyledButton = styled.button`
  &&.button {
    padding: 14px 32px;
    border: none;
    border-radius: 16px;
    background: linear-gradient(90deg, #00c3ff 0%, #fc00ff 100%);
    color: white;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(44, 19, 56, 0.18), 0 1.5px 8px rgba(0,0,0,0.08);
    transition: all 0.3s cubic-bezier(.4,2,.6,1);
    margin: 8px;
    letter-spacing: 0.5px;
    display: inline-flex;
    align-items: center;
    gap: 12px;

    &__icon {
      display: inline-flex;
      font-size: 1.5em;
      transition: transform 0.2s;
    }

    &:hover .button__icon {
      animation: ${bounce} 0.7s infinite;
    }

    &--rick {
      background: linear-gradient(90deg, #00c3ff 0%, #3be8b0 100%);
    }
    &--harry {
      background: linear-gradient(90deg, #ffe066 0%, #f783ac 100%);
    }

    &:hover {
      background: linear-gradient(90deg, #fc00ff 0%, #00c3ff 100%);
      transform: translateY(-2px) scale(1.03);
      box-shadow: 0 8px 32px rgba(44, 19, 56, 0.22), 0 2px 12px rgba(0,0,0,0.10);
    }

    &:active {
      transform: translateY(0) scale(0.98);
    }

    &&--secondary {
      background-color: #6c757d;
      &:hover {
        background-color: #545b62;
      }
    }

    &&--danger {
      background-color: #dc3545;
      &:hover {
        background-color: #c82333;
      }
    }

    &:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
      transform: none;
    }
  }
`
