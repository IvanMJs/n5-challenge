import styled from "styled-components"

export const CardWrapper = styled.div`
  &.character-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 3px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    margin: 0 auto;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    &__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    &__content {
      padding: 16px;
      width: 100%;
    }

    &__name {
      margin: 0 0 12px 0;
      font-size: 1.25rem;
      font-weight: bold;
      color: #333;
      text-align: center;
    }

    &__info {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.5;
    }

    &__info-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    &__info-item-label {
      font-weight: 500;
    }

    &__status--alive {
      color: #28a745;
    }

    &__status--dead {
      color: #dc3545;
    }

    &__status--unknown {
      color: #ffc107;
    }
  }
`
