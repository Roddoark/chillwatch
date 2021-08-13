import React from 'react';

import MovieCard from '.';

export default {
  title: 'Components/MovieCard',
  component: MovieCard,
};

const Template = (args) => <MovieCard {...args} />;

export const Primary = Template.bind({});
