import React from 'react';

import MoviesList from '.';

const props = [
    {
      id: 'item-1',
      src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2//dJxKQ1KOAFUcQ4WpvMgcnCsbU5o.jpg',
      alt: "Film 1",
    },
    {
      id: 'item-2',
      src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2//au8scCY0oS9RRtgqeJbkIqyBj3U.jpg',
      alt: "Film 2",
    },
    {
      id: 'item-3',
      src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2//9Nf2Iw0Eu4QRbMpgMHyKhjUZ2EL.jpg',
      alt: "Film 3",
    },
    {
      id: 'item-4',
      src: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2//1AZeUbutbivet3bXi2I2TT0Q2E5.jpg',
      alt: "Film 4",
    }
  ];
  
export default {
  title: 'Components/MoviesList',
  component: MoviesList,
};

const Template = (args) => <MoviesList items={props} />;

export const Primary = Template.bind({});
