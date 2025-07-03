import styled from "styled-components"

export const StyledBreadcrumbList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.375rem; /* 1.5 */
  word-break: break-word;
  font-size: 0.875rem;
  color: var(--muted-foreground, #6b7280);
  @media (min-width: 640px) {
    gap: 0.625rem; /* 2.5 */
  }
`;

export const StyledBreadcrumbItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
`;

export const StyledBreadcrumbLink = styled.a`
  transition: color 0.2s;
  &:hover {
    color: var(--foreground, #111827);
  }
`;

export const StyledBreadcrumbPage = styled.span`
  font-weight: 400;
  color: var(--foreground, #111827);
`;

export const StyledBreadcrumbSeparator = styled.li`
  & > svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`;

export const StyledBreadcrumbEllipsis = styled.span`
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center;
`; 