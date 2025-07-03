import styled, { css, keyframes } from "styled-components";

const shine = keyframes`
  100% { transform: translateX(100%) skewX(-12deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

export const StyledButton = styled.button`
  &.button {
    position: relative;
    overflow: hidden;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 1.125rem;
    transition: all 0.5s;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    border: 2px solid transparent;
    backdrop-filter: blur(8px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.95);
    }
    &.button--primary {
      background: linear-gradient(to right, #3b82f6, #8b5cf6);
      color: #fff;
      border-color: #60a5fa;
      box-shadow: 0 2px 8px #3b82f640;
      &:hover {
        background: linear-gradient(to right, #2563eb, #7c3aed);
        border-color: #93c5fd;
      }
    }
    &.button--secondary {
      background: linear-gradient(to right, #6b7280, #374151);
      color: #fff;
      border-color: #9ca3af;
      box-shadow: 0 2px 8px #6b728040;
      &:hover {
        background: linear-gradient(to right, #4b5563, #1f2937);
        border-color: #d1d5db;
      }
    }
    &.button--danger {
      background: linear-gradient(to right, #ef4444, #ec4899);
      color: #fff;
      border-color: #f87171;
      box-shadow: 0 2px 8px #ef444440;
      &:hover {
        background: linear-gradient(to right, #dc2626, #be185d);
        border-color: #fca5a5;
      }
    }
    &.button--rick {
      background: linear-gradient(to right, #4ade80, #3b82f6);
      color: #fff;
      border-color: #6ee7b7;
      box-shadow: 0 2px 8px #4ade8040;
      &:hover {
        background: linear-gradient(to right, #22d3ee, #2563eb);
        border-color: #a7f3d0;
      }
    }
    &.button--harry {
      background: linear-gradient(to right, #8b5cf6, #fde047);
      color: #fff;
      border-color: #a78bfa;
      box-shadow: 0 2px 8px #8b5cf640;
      &:hover {
        background: linear-gradient(to right, #7c3aed, #facc15);
        border-color: #f3e8ff;
      }
    }
    &.disabled, &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      transform: none;
    }
    .button__shine {
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
      transform: skewX(-12deg) translateX(-100%);
      animation: ${shine} 1s linear forwards;
      pointer-events: none;
    }
    .button__content {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }
    .button__icon {
      font-size: 1.25rem;
      animation: ${bounce} 1s infinite;
    }
  }
`; 