import styled, { css } from "styled-components";

export const BadgeWrapper = styled.div<{ $variant?: string }>`
  &.badge {
    display: inline-flex;
    align-items: center;
    border-radius: 9999px;
    border: 1px solid transparent;
    padding: 0.125rem 0.625rem;
    font-size: 0.75rem;
    font-weight: 600;
    transition: background 0.2s, color 0.2s, border 0.2s;
    outline: none;
    &:focus {
      box-shadow: 0 0 0 2px #6366f1, 0 0 0 4px #e0e7ff;
    }
    ${({ $variant }) => {
      switch ($variant) {
        case "secondary":
          return css`
            background: #f3f4f6;
            color: #374151;
            border-color: transparent;
            &:hover { background: #e5e7eb; }
          `;
        case "destructive":
          return css`
            background: #ef4444;
            color: #fff;
            border-color: transparent;
            &:hover { background: #dc2626; }
          `;
        case "outline":
          return css`
            background: transparent;
            color: #222;
            border-color: #e5e7eb;
          `;
        default:
          return css`
            background: #6366f1;
            color: #fff;
            border-color: transparent;
            &:hover { background: #4f46e5; }
          `;
      }
    }}
  }
`; 