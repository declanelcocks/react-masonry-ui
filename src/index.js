import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const itemHeights = {
  'x-small': '85px',
  small: '110px',
  medium: '135px',
  large: '195px',
  'x-large': '205px',
};

const Item = styled.div`
  break-inside: avoid;
  padding: 10px;

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #FAFAFA;
    height: ${({ size }) => itemHeights[size] || itemHeights['medium']}
  }
`

const MasonryItem = ({ children, ...props }) => (
  <Item {...props}>
    <div>
      {children}
    </div>
  </Item>
);

MasonryItem.defaultProps = {
  size: 'medium',
};

MasonryItem.propTypes = {
  children: PropTypes.any,
  size: PropTypes.string,
};

const Container = styled.div`
  /* The column-count property specifies the number of columns an element should be divided into */
  column-count: 1;
  /* The column-gap property specifies the gap between the columns */
  column-gap: 0;
  background: #CCCCCC;

  @media screen and (min-width: 400px) {
    column-count: 2;
  }

  @media screen and (min-width: 600px) {
    column-count: 3;
  }

  @media screen and (min-width: 800px) {
    column-count: 4;
  }

  @media screen and (min-width: 1100px) {
    column-count: 5;
  }
`;

const Masonry = ({ children, ...props }) => (
  <Container className="masonry" {...props}>
    {children}
  </Container>
);

Masonry.propTypes = {
  children: PropTypes.any,
};

export {
  Masonry,
  MasonryItem,
};
