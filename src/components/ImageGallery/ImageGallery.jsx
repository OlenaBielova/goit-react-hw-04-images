import React, { useState, useEffect } from 'react';
import { getImages } from 'services/api';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export function ImageGallery({ searchQuery }) {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  useEffect(() => {
    setImages([]);
    setPage(1);
    setQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    async function fetchImages() {
      try {
        if (query === '') {
          return;
        }
        setLoading(true);
        setIsBtnVisible(false);

        const imageList = await getImages(query, page);

        if (imageList.totalHits === 0) {
          alert('Images not found');
        }
        setImages(prevImages => [...prevImages, ...imageList.hits]);
        setLoading(false);
        setTotalHits(imageList.totalHits);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    }
    fetchImages();
  }, [query, page]);

  if (images.length !== 0 && !isBtnVisible && images.length < totalHits) {
    setIsBtnVisible(true);
  } else if (images.length >= totalHits && isBtnVisible) {
    setIsBtnVisible(false);
  }

  const onLoadMoreBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
        {error && 'Something went wrong...'}
      </Gallery>
      {isBtnVisible && <Button images={images} onClick={onLoadMoreBtnClick} />}
      {loading && <Loader />}
    </>
  );
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
