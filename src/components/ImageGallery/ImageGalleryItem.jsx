import React, { useState, useEffect } from 'react';
import { Modal } from 'components/Modal';
import { Image, GalleryItem } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
      document.removeEventListener('keydown', handleKeyDown);
    }
  };

  const { webformatURL, tags, largeImageURL } = image;

  return (
    <GalleryItem>
      <Image onClick={openModal} src={webformatURL} alt={tags} />
      {isModalOpen && (
        <Modal onClick={closeModal} src={largeImageURL} alt={tags} />
      )}
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
