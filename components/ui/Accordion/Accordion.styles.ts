import styled from "styled-components";

export const AccordionItemWrapper = styled.div`
  &.accordion__item {
    border-bottom: 1px solid #e5e7eb;
  }
`;

export const AccordionHeader = styled.div`
  &.accordion__header {
    display: flex;
  }
`;

export const AccordionTrigger = styled.button`
  &.accordion__trigger {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s, text-decoration 0.2s;
    &:hover {
      text-decoration: underline;
    }
    svg {
      width: 1rem;
      height: 1rem;
      transition: transform 0.2s;
    }
    &[data-state="open"] > svg {
      transform: rotate(180deg);
    }
  }
`;

export const AccordionContentWrapper = styled.div`
  &.accordion__content {
    overflow: hidden;
    font-size: 1rem;
    transition: max-height 0.3s, opacity 0.3s;
    padding-bottom: 1rem;
    padding-top: 0;
  }
`; 