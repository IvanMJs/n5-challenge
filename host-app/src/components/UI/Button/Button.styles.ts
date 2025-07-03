import styled from "styled-components"

export const StyledButton = styled.button`
  &&.button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 8px;

    &:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    &&--secondary {
      background-color: #6c757d;
      
      &:hover {
        background-color: #545b62;
      }
    }

    &&--danger {
      background-color: #dc3545;
      
      &:hover {
        background-color: #c82333;
      }
    }

    &:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
      transform: none;
    }
  }
`
