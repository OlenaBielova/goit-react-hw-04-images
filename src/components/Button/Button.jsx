import { Wrapper } from 'components/Loader/Loader.styled';
import React from 'react';
import { LoadMoreButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ images, onClick }) => {
  const emptyImages = images.length === 0;
  if (!emptyImages) {
    return (
      <Wrapper>
        <LoadMoreButton onClick={onClick} type="button">
          Load more
        </LoadMoreButton>
      </Wrapper>
    );
  }
};

Button.propTypes = {
  images: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};