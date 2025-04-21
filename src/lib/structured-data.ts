export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HarmonyHaven',
    name: 'Harmony Have',
    url: 'https://harmony-haven.gcrozariol.me',
    logo: 'https://harmony-haven.gcrozariol.me/logo.png',
    sameAs: [
      'https://facebook.com/harmony-haven',
      'https://twitter.com/harmony-haven',
      'https://instagram.com/harmony-haven',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Music Avenue',
      addressLocality: 'Nashville',
      addressRegion: 'TN',
      postalCode: '37203',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.1627',
      longitude: '-86.7816',
    },
    telephone: '+15551234567',
    email: 'info@harmony-haven.gcrozariol.me',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    description:
      'Harmony Have offers premium musical instruments and expert music lessons for all skill levels. Serving musicians since 1995.',
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateProductSchema(product: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.name.split(' ')[0], // Assuming first word is the brand (e.g., "Fender" from "Fender Stratocaster")
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Harmony Have',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  }
}

export function generateMusicLessonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Music Lessons',
    serviceType: 'Music Instruction',
    provider: {
      '@type': 'HarmonyHaven',
      name: 'Harmony Have',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Music Avenue',
        addressLocality: 'Nashville',
        addressRegion: 'TN',
        postalCode: '37203',
        addressCountry: 'US',
      },
    },
    description:
      'Professional music lessons for all skill levels and ages. Our instructors have decades of real-world performance and teaching experience.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '50',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '50',
        priceCurrency: 'USD',
        unitText: 'per hour',
      },
    },
  }
}
