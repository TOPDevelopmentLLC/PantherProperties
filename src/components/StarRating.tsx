interface StarRatingProps {
  count?: number
}

export default function StarRating({ count = 5 }: StarRatingProps) {
  return (
    <span aria-hidden="true">
      {'★'.repeat(count)}
    </span>
  )
}
