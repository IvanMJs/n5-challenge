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
      /* Sin estilos de card, solo layout */
    }
    .character-list__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
`
