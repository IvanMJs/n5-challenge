import { SkeletonStyled } from "./Skeleton.styles"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <SkeletonStyled className={className} {...props} />
  )
}

export { Skeleton }
