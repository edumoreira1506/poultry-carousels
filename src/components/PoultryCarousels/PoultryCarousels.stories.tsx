import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { poultryFactory } from '@cig-platform/factories'

import PoultryCarousels from './PoultryCarousels'

export default {
  title: 'PoultryCarousels',
  component: PoultryCarousels,
} as ComponentMeta<typeof PoultryCarousels>

const Template: ComponentStory<typeof PoultryCarousels> = (args) => <PoultryCarousels {...args} />

export const Example = Template.bind({})
Example.args = {
  forSale: Array(10).fill({
    ...poultryFactory(),
    mainImage: '1634766823222-c4f8a3c6-713d-45f0-a492-49643cf32ed6.jpeg',
    images: [
      {
        id: '',
        poultryId: '',
        imageUrl: '1634766823222-c4f8a3c6-713d-45f0-a492-49643cf32ed6.jpeg'
      },
      {
        id: '',
        poultryId: '',
        imageUrl: '1634766823222-c4f8a3c6-713d-45f0-a492-49643cf32ed6.jpeg'
      },
      {
        id: '',
        poultryId: '',
        imageUrl: '1634766823222-c4f8a3c6-713d-45f0-a492-49643cf32ed6.jpeg'
      }
    ]
  }),
}

export const EmptyState = Template.bind({})
EmptyState.args = {
}
