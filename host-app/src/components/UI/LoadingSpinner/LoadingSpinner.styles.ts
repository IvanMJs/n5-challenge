import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const SpinnerContainer = styled.div`
  &.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;

    &__spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #007bff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: ${spin} 1s linear infinite;
    }

    &__text {
      margin-left: 16px;
      font-size: 16px;
      color: #666;
    }
  }
`
