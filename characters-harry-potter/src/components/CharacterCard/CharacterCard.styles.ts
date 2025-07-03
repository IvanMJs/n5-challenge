import styled from "styled-components"

// CardContainer ya no se usa, todo el diseño va en CardWrapper con la clase BEM

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
`

export const Content = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Name = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 12px 0;
  line-height: 1.3;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`

export const InfoItemLabel = styled.span`
  font-weight: 600;
  color: #bcbcd1;
  min-width: 80px;
  margin-right: 8px;
`

export const InfoItemValue = styled.span`
  color: #fff;
  flex: 1;
`

export const House = styled.span<{ house?: string }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${({ house }) => {
    switch (house?.toLowerCase()) {
      case "gryffindor":
        return "#740001";
      case "slytherin":
        return "#1a472a";
      case "ravenclaw":
        return "#0e1a40";
      case "hufflepuff":
        return "#ecb939";
      default:
        return "#f8f9fa";
    }
  }};
  color: ${({ house }) => {
    switch (house?.toLowerCase()) {
      case "gryffindor":
        return "#ffc500";
      case "slytherin":
        return "#aaaaaa";
      case "ravenclaw":
        return "#946b2d";
      case "hufflepuff":
        return "#000000";
      default:
        return "#333";
    }
  }};
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: #e3f2fd;
  color: #1565c0;
  margin-left: 4px;
`

export const CardWrapper = styled.div`
  position: relative;
  &.character-card {
    .character-card__container {
      background: radial-gradient(ellipse at 60% 60%, rgba(255,224,102,0.18) 0%, rgba(243,87,168,0.32) 60%, rgba(162,89,247,0.12) 100%);
      backdrop-filter: blur(12px);
      border-radius: 2rem;
      box-shadow: 0 6px 32px 0 rgba(44,19,56,0.13);
      border: 2px solid rgba(177,143,255,0.7);
      overflow: hidden;
      transition: box-shadow 0.5s, transform 0.5s, border 0.5s;
      position: relative;
      &:hover, &.character-card--hovered {
        box-shadow: 0 8px 32px 0 rgba(128, 90, 213, 0.2);
        transform: scale(1.05);
        border-color: #b18fff;
      }
    }
  }
`
