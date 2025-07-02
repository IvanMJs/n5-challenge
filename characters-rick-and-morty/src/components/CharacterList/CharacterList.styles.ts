import styled from "styled-components"

export const ListContainer = styled.div`
  &.character-list {
    padding: 20px;

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
      margin-top: 24px;
    }

    &__loading {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
      font-size: 18px;
      color: #666;
    }

    &__error {
      text-align: center;
      padding: 40px;
      background-color: #f8d7da;
      border: 1px solid #f5c6cb;
      border-radius: 8px;
      color: #721c24;

      &-message {
        font-size: 16px;
        margin-bottom: 16px;
      }

      &-button {
        background-color: #dc3545;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #c82333;
        }
      }
    }

    &__empty {
      text-align: center;
      padding: 40px;
      color: #666;
      font-size: 16px;
    }
  }
`
