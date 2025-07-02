import styled from "styled-components"

export const AppWrapper = styled.div`
  &.app {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

    &__main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

    &__section {
      background: white;
      border-radius: 12px;
      padding: 24px;
      margin: 24px 0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }

      &-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 16px;
        color: #333;
        text-align: center;
      }

      &-controls {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-bottom: 24px;
      }
    }
  }
`
