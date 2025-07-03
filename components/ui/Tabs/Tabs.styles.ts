import styled from "styled-components";

export const TabsListWrapper = styled.div`
  &.tabs__list {
    display: inline-flex;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    background: #f3f4f6;
    color: #6b7280;
    padding: 0.25rem;
  }
`;

export const TabsTriggerButton = styled.button`
  &.tabs__trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-radius: 0.25rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    &:focus {
      outline: 2px solid #6366f1;
      outline-offset: 2px;
    }
    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
    &[data-state="active"] {
      background: #fff;
      color: #222;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    }
  }
`;

export const TabsContentWrapper = styled.div`
  &.tabs__content {
    margin-top: 0.5rem;
    outline: none;
    &:focus {
      outline: 2px solid #6366f1;
      outline-offset: 2px;
    }
  }
`; 