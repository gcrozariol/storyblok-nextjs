/* eslint-disable @typescript-eslint/no-explicit-any */

export async function getShopifyProducts() {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}/api/2025-04/graphql.json`,
    {
      method: 'POST',
      headers: {
        'X-Shopify-Storefront-Access-Token':
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        {
          products(first: 10) {
            edges {
              node {
                id
                title
                handle
                featuredImage {
                  url
                }
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
              }
            }
          }
        }
      `,
      }),
    },
  )

  const json = await res.json()
  return json.data.products.edges.map((edge: any) => edge.node)
}
