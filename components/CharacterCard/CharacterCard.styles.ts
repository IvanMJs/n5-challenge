import styled, { css } from "styled-components"

export const CardWrapper = styled.div`
  position: relative;
  &.character-card {
    /* Efecto de fondo y borde */
    .character-card__container {
      backdrop-filter: blur(16px);
      background: rgba(255,255,255,0.1);
      border-radius: 1.5rem;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border: 1px solid rgba(255,255,255,0.2);
      overflow: hidden;
      transition: box-shadow 0.5s, transform 0.5s, border 0.5s;
      position: relative;
      &:hover, &.character-card--hovered {
        box-shadow: 0 8px 32px 0 rgba(128, 90, 213, 0.2);
        transform: scale(1.05);
        border-color: rgba(255,255,255,0.4);
      }
    }
    .character-card__image {
      width: 100%;
      height: 16rem;
      object-fit: cover;
      border-top-left-radius: 1.5rem;
      border-top-right-radius: 1.5rem;
      transition: transform 0.5s;
      &:hover, &.character-card--hovered {
        transform: scale(1.1);
      }
    }
    .character-card__content {
      padding: 1.5rem;
      position: relative;
    }
    .character-card__name {
      font-size: 1.25rem;
      font-weight: bold;
      color: #fff;
      margin-bottom: 1rem;
      line-clamp: 2;
      transition: color 0.3s;
      &:hover, &.character-card--hovered {
        color: #fde047;
      }
    }
    .character-card__info {
      margin-bottom: 1rem;
      font-size: 0.95rem;
      color: #e5e7eb;
    }
    .character-card__info-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }
    .character-card__info-item-label {
      font-weight: 600;
      color: #f3f4f6;
    }
    .character-card__info-item-value {
      color: #fff;
      font-weight: 500;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
    }
    .character-card__status {
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      &.alive {
        background: linear-gradient(to right, #4ade80, #10b981);
        color: #fff;
      }
      &.dead {
        background: linear-gradient(to right, #ef4444, #ec4899);
        color: #fff;
      }
      &.unknown {
        background: linear-gradient(to right, #facc15, #f59e42);
        color: #fff;
      }
    }
    .character-card__house {
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      &.gryffindor {
        background: linear-gradient(to right, #dc2626, #fde047);
        color: #fff;
      }
      &.slytherin {
        background: linear-gradient(to right, #15803d, #4b5563);
        color: #fff;
      }
      &.ravenclaw {
        background: linear-gradient(to right, #1e40af, #6366f1);
        color: #fff;
      }
      &.hufflepuff {
        background: linear-gradient(to right, #fde047, #f59e42);
        color: #000;
      }
      &.default {
        background: linear-gradient(to right, #9ca3af, #6b7280);
        color: #fff;
      }
    }
    .character-card__badge {
      margin-left: 0.5rem;
      font-size: 1.25rem;
      animation: pulse 1.5s infinite;
    }
    .character-card__bottom-border {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.25rem;
      background: linear-gradient(to right, #a21caf, #ec4899, #2563eb);
      opacity: 0;
      transition: opacity 0.3s;
      &.character-card--hovered {
        opacity: 1;
      }
    }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

export const BottomBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.25rem;
  background: linear-gradient(to right, #a21caf, #ec4899, #2563eb);
  opacity: 0;
  transition: opacity 0.3s;
  /* Si necesitas el efecto hovered, puedes manejarlo con props o contexto */
`; 