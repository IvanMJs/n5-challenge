import styled from "styled-components"

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

export const StatusBadge = styled.span<{ status?: string }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  background: ${({ status }) => {
    switch (status?.toLowerCase()) {
      case "alive":
        return "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)";
      case "dead":
        return "linear-gradient(90deg, #ff5858 0%, #f09819 100%)";
      default:
        return "linear-gradient(90deg, #bcbcd1 0%, #e0e0e0 100%)";
    }
  }};
  color: #fff;
  margin-left: 8px;
`
