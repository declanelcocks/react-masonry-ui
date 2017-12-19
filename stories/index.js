import React from 'react';

import { storiesOf } from '@storybook/react';

import { Masonry, MasonryItem } from '../src';

const generateItem = (el, i) => {
  const sizes = ['x-small', 'small', 'small', 'medium', 'medium', 'large', 'x-large'];
  const size = sizes[Math.floor(Math.random() * sizes.length)];

  return (
    <MasonryItem key={i} size={size}>
      {i}
    </MasonryItem>
  );
};

storiesOf('Masonry', module)
  .add('default', () => (
    <Masonry>
      {Array(20).fill().map(generateItem)}
    </Masonry>
  ));
