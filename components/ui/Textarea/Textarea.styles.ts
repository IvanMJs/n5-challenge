import styled from "styled-components";

export const TextareaStyled = styled.textarea`
  display: flex;
  min-height: 80px;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
  background: #fff;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  &::placeholder {
    color: #9ca3af;
  }
  &:focus-visible {
    border-color: #1d4ed8;
    box-shadow: 0 0 0 2px #1d4ed833;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &.textarea {
    // BEM root
  }
`; 