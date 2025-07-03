import styled, { css } from "styled-components";

export const PaginationNav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  &.pagination {
    // BEM root
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
  &.pagination__list {
    // BEM element
  }
`;

export const PaginationListItem = styled.li`
  &.pagination__item {
    // BEM element
  }
`;

const iconSize = css`
  &.pagination__icon {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    vertical-align: middle;
  }
`;

const linkBase = css<{
  $isActive?: boolean;
  $size?: "default" | "icon";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, border 0.2s, color 0.2s;
  min-width: ${({ $size }) => ($size === "default" ? "2.25rem" : "2.25rem")};
  height: ${({ $size }) => ($size === "default" ? "2.25rem" : "2.25rem")};
  padding: ${({ $size }) => ($size === "default" ? "0 0.75rem" : "0")};
  color: ${({ $isActive }) => ($isActive ? "#1d4ed8" : "#374151")};
  background: ${({ $isActive }) => ($isActive ? "#fff" : "transparent")};
  border-color: ${({ $isActive }) => ($isActive ? "#1d4ed8" : "transparent")};
  box-shadow: ${({ $isActive }) => ($isActive ? "0 0 0 2px #1d4ed833" : "none")};
  &:hover {
    background: #f3f4f6;
    color: #1d4ed8;
  }
  &.pagination__link {
    // BEM element
  }
  ${iconSize}
`;

export const PaginationLinkStyled = styled.a<{
  $isActive?: boolean;
  $size?: "default" | "icon";
}>`
  ${linkBase}
`;

export const PaginationPreviousStyled = styled(PaginationLinkStyled)`
  &.pagination__previous {
    padding-left: 0.625rem;
    gap: 0.25rem;
  }
`;

export const PaginationNextStyled = styled(PaginationLinkStyled)`
  &.pagination__next {
    padding-right: 0.625rem;
    gap: 0.25rem;
  }
`;

export const PaginationEllipsisStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  &.pagination__ellipsis {
    // BEM element
  }
  ${iconSize}
`; 