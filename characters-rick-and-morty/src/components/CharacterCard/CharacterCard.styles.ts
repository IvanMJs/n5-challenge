import styled from "styled-components"

export const CardContainer = styled.div`
  &.character-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    &__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-bottom: 1px solid #eee;
    }

    &__content {
      padding: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    &__name {
      font-size: 1.25rem;
      font-weight: 700;
      color: #333;
      margin: 0 0 12px 0;
      line-height: 1.3;
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      flex: 1;
    }

    &__info-item {
      display: flex;
      align-items: center;
      font-size: 0.9rem;

      &-label {
        font-weight: 600;
        color: #666;
        min-width: 80px;
        margin-right: 8px;
      }

      &-value {
        color: #333;
        flex: 1;
      }
    }

    &__status {
      display: inline-flex;
      align-items: center;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;

      &--alive {
        background-color: #d4edda;
        color: #155724;
      }

      &--dead {
        background-color: #f8d7da;
        color: #721c24;
      }

      &--unknown {
        background-color: #fff3cd;
        color: #856404;
      }
    }
  }
`
