import styled from "styled-components";

export const SwitcherWrapper = styled.div`
  &.language-switcher {
    display: flex;
    align-items: center;
    gap: 1rem;
    .language-switcher__label {
      font-weight: 600;
      color: #f3f4f6;
      font-size: 1rem;
    }
    .language-switcher__select {
      appearance: none;
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(4px);
      border: 1.5px solid #e5e7eb;
      border-radius: 0.75rem;
      padding: 0.5rem 2rem 0.5rem 1rem;
      color: #fff;
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s, border-color 0.3s;
      &:hover {
        background: rgba(255,255,255,0.3);
      }
      &:focus {
        outline: none;
        border-color: #60a5fa;
        box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
      }
      option {
        color: #222;
      }
    }
    .language-switcher__icon {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      svg {
        width: 1.25rem;
        height: 1.25rem;
        color: #f3f4f6;
        opacity: 0.7;
      }
    }
  }
`; 