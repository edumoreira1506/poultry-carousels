import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import PoultryCarousels from './PoultryCarousels'

export default {
  title: 'PoultryCarousels',
  component: PoultryCarousels,
} as ComponentMeta<typeof PoultryCarousels>

const Template: ComponentStory<typeof PoultryCarousels> = (args) => <PoultryCarousels {...args} />

export const Example = Template.bind({})
Example.args = {
}
