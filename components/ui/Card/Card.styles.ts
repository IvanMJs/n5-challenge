import styled from "styled-components";

export const CardWrapper = styled.div`
  &.card {
    border-radius: 0.75rem;
    border: 1px solid #e5e7eb;
    background: #fff;
    color: #222;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }
`;

export const CardHeader = styled.div`
  &.card__header {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    padding: 1.5rem;
    padding-bottom: 0;
  }
`;

export const CardTitle = styled.div`
  &.card__title {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.01em;
  }
`;

export const CardDescription = styled.div`
  &.card__description {
    font-size: 1rem;
    color: #6b7280;
  }
`;

export const CardContent = styled.div`
  &.card__content {
    padding: 1.5rem;
    padding-top: 0;
  }
`;

export const CardFooter = styled.div`
  &.card__footer {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    padding-top: 0;
  }
`; 