import styled, { css } from "styled-components"

export const StyledChartContainer = styled.div`
  display: flex;
  aspect-ratio: 16/9;
  justify-content: center;
  font-size: 0.75rem;
  /* Aquí puedes agregar más estilos globales para el chart */
`;

export const StyledChartTooltipContent = styled.div`
  min-width: 8rem;
  display: grid;
  align-items: start;
  gap: 0.375rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border, #e5e7eb);
  background: var(--background, #fff);
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
`;

export const StyledChartTooltipLabel = styled.div`
  font-weight: 500;
`;

export const StyledChartTooltipItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledChartTooltipIndicator = styled.span<{
  $type: "dot" | "line" | "dashed"
  $color?: string
}>`
  display: inline-block;
  border-radius: 2px;
  background: ${({ $color }) => $color || "#6366f1"};
  ${({ $type }) =>
    $type === "dot"
      ? css`
          width: 1rem;
          height: 1rem;
        `
      : $type === "line"
      ? css`
          width: 0.25rem;
          height: 1rem;
        `
      : css`
          width: 0.25rem;
          height: 1rem;
          border: 1.5px dashed ${({ $color }) => $color || "#6366f1"};
          background: transparent;
        `}
`; 