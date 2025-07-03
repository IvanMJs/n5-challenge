import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import {
  PaginationNav,
  PaginationList,
  PaginationListItem,
  PaginationLinkStyled,
  PaginationPreviousStyled,
  PaginationNextStyled,
  PaginationEllipsisStyled
} from "./Pagination.styles"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <PaginationNav className={className} {...props} />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <PaginationList ref={ref} className={className} {...props} />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <PaginationListItem ref={ref} className={className} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
  size?: "default" | "icon"
} & React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <PaginationLinkStyled
    aria-current={isActive ? "page" : undefined}
    $isActive={isActive}
    $size={size}
    className={className}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationPreviousStyled
    aria-label="Go to previous page"
    $size="default"
    className={className}
    {...props}
  >
    <ChevronLeft className="pagination__icon" />
    <span>Previous</span>
  </PaginationPreviousStyled>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationNextStyled
    aria-label="Go to next page"
    $size="default"
    className={className}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="pagination__icon" />
  </PaginationNextStyled>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <PaginationEllipsisStyled className={className} {...props}>
    <MoreHorizontal className="pagination__icon" />
    <span className="sr-only">More pages</span>
  </PaginationEllipsisStyled>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
