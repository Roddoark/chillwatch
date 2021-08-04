import React from 'react';

import { H1 } from '.';

export default {
  title: 'Components/H1',
  component: H1,
  argTypes: {
    title: { control: 'color' },
  },
};

const Template = (args) => <H1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'H1',
};
