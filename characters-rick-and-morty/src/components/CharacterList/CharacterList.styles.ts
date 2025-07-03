import styled from "styled-components"

export const ListWrapper = styled.div`
  &.character-list {
    padding: 20px;
    .character-list__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }
    .character-list__card {
      background: none;
      border-radius: 0;
      box-shadow: none;
      border: none;
      overflow: visible;
      transition: none;
    }
    .character-list__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .character-list__content {
      padding: 16px;
    }
    .character-list__name {
      margin: 0 0 12px 0;
      font-size: 1.25rem;
      font-weight: bold;
      color: #333;
    }
    .character-list__info {
      font-size: 0.9rem;
      color: #666;
      line-height: 1.5;
    }
    .character-list__status--alive {
      color: #28a745;
    }
    .character-list__status--dead {
      color: #dc3545;
    }
    .character-list__status--unknown {
      color: #ffc107;
    }
  }
`
