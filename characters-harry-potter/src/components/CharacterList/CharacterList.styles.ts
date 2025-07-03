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
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
      border: 3px solid #e5e7eb;
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
      }
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
