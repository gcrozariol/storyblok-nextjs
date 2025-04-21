import { GridStoryblok } from '@/components/components-schema'
import ProductCardBlock from './product-card'

interface GridStoryblokProps {
  blok: GridStoryblok
}

export default function GridBlok({ blok }: GridStoryblokProps) {
  return (
    <div className={`py-8 gap-4 grid lg:grid-cols-${blok.columns_number}`}>
      {blok.columns &&
        blok.columns.map(
          ({ _uid, image, product_name: productName, price, link, body }) => (
            <ProductCardBlock
              key={_uid}
              _uid={_uid}
              product_name={productName}
              price={price}
              link={link}
              component={body}
              image={image}
            />
          ),
        )}
    </div>
  )
}
