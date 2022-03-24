import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { poultryFactory } from '@cig-platform/factories'

import PoultryCarousels from './PoultryCarousels'

export default {
  title: 'PoultryCarousels',
  component: PoultryCarousels,
} as ComponentMeta<typeof PoultryCarousels>

const Template: ComponentStory<typeof PoultryCarousels> = (args) => <PoultryCarousels {...args} />

const poultries = [
  {
    ...poultryFactory(),
    mainImage: '1647637912039-2021-11-06_21-21.png',
    images: []
  },
  {
    ...poultryFactory(),
    mainImage: '1647637935572-2021-11-06_21-21_3.png',
    images: []
  },
  {
    ...poultryFactory(),
    mainImage: '1647637864964-2021-11-06_21-19_2.png',
    images: []
  }
]

export const Example = Template.bind({})
Example.args = {
  forSale: poultries,
  reproductives: poultries,
  matrixes: poultries,
  females: poultries,
  males: poultries,
  onFinishSlides: action('onFinishSlides'),
  onViewPoultry: action('onViewPoultry'),
  onEditPoultry: action('onEditPoultry'),
}

export const EmptyState = Template.bind({})
EmptyState.args = {
  onFinishSlides: action('onFinishSlides'),
  onViewPoultry: action('onViewPoultry'),
  onEditPoultry: action('onEditPoultry'),
}
