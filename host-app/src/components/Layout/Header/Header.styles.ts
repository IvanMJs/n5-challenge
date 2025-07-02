import styled from "styled-components"

export const HeaderContainer = styled.header`
  &.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 24px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &__title {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0 0 8px 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    &__subtitle {
      font-size: 1.2rem;
      font-weight: 300;
      margin: 0;
      opacity: 0.9;
    }
  }
`
