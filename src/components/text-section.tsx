import React from 'react'
import { richTextResolver } from '@storyblok/richtext'
import { convertAttributesInElement } from '@storyblok/react'
import type { TextSectionStoryblok } from './components-schema'

export default function TextSection({ blok }: { blok: TextSectionStoryblok }) {
  const { headline, lead, text } = blok

  const richText = richTextResolver({
    renderFn: React.createElement,
    keyedResolvers: true,
  }).render(text)

  const formattedHtml = convertAttributesInElement(richText)

  return (
    <div>
      <h1>{headline}</h1>
      <h2>{lead}</h2>
      <span>{formattedHtml}</span>
    </div>
  )
}
