import { PrismicRichText } from '@prismicio/react'

const RichText = ({ field, className }: any) => {
  return (
    field && (
      <div className={className}>
        <PrismicRichText field={field} />
      </div>
    )
  )
}

export default RichText
