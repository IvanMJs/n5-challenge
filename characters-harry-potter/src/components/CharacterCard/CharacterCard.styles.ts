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
      height: 250px;
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

    &__house {
      display: inline-flex;
      align-items: center;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;

      &--gryffindor {
        background-color: #740001;
        color: #ffc500;
      }

      &--slytherin {
        background-color: #1a472a;
        color: #aaaaaa;
      }

      &--ravenclaw {
        background-color: #0e1a40;
        color: #946b2d;
      }

      &--hufflepuff {
        background-color: #ecb939;
        color: #000000;
      }

      &--default {
        background-color: #f8f9fa;
        color: #333;
      }
    }

    &__badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 6px;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: 600;
      background-color: #e3f2fd;
      color: #1565c0;
      margin-left: 4px;
    }
  }
`
