import React from 'react';
import { ImgModal, Overlay, LargeImg } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ src, alt, onClick }) => (
  <Overlay onClick={onClick}>
    <ImgModal>
      <LargeImg src={src} alt={alt} />
    </ImgModal>
  </Overlay>
);

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
