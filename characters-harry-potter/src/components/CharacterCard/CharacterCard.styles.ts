import styled from "styled-components"

export const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
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
  color: #333;
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
  color: #666;
  min-width: 80px;
  margin-right: 8px;
`

export const InfoItemValue = styled.span`
  color: #333;
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
