import styled from "styled-components"

export const TableWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
`;

export const TableRoot = styled.table`
  width: 100%;
  caption-side: bottom;
  font-size: 0.875rem;
`;

export const TableHeaderRoot = styled.thead`
  & tr {
    border-bottom: 1px solid var(--color-border);
  }
`;

export const TableBodyRoot = styled.tbody`
  & tr:last-child {
    border-bottom: 0;
  }
`;

export const TableFooterRoot = styled.tfoot`
  border-top: 1px solid var(--color-border);
  background: var(--color-muted);
  font-weight: 500;
  & > tr:last-child {
    border-bottom: 0;
  }
`;

export const TableRowRoot = styled.tr`
  border-bottom: 1px solid var(--color-border);
  transition: background 0.2s;
  &:hover {
    background: var(--color-muted);
  }
  &[data-state="selected"] {
    background: var(--color-muted);
  }
`;

export const TableHeadRoot = styled.th`
  height: 3rem;
  padding: 0 1rem;
  text-align: left;
  vertical-align: middle;
  font-weight: 500;
  color: var(--color-muted-foreground);
  & [role="checkbox"] {
    padding-right: 0;
  }
`;

export const TableCellRoot = styled.td`
  padding: 1rem;
  vertical-align: middle;
  & [role="checkbox"] {
    padding-right: 0;
  }
`;

export const TableCaptionRoot = styled.caption`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: var(--color-muted-foreground);
`; 