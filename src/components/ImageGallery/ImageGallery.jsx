import React, { Component } from 'react';
import { getImages } from 'services/api';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    query: '',
    images: [],
    totalHits: 0,
    loading: false,
    page: 1,
    error: false,
    btnIsVisible: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const { images, btnIsVisible, totalHits, query } = this.state;
    const prevStateQuery = prevState.query;

    if (prevQuery !== nextQuery) {
      this.setState(prevState => ({
        ...prevState,
        images: [],
        page: 1,
        query: this.props.query,
      }));
    }

    if (prevStateQuery !== query || (prevPage !== nextPage && nextPage !== 1)) {
      try {
        this.setState({ loading: true });
        const imageList = await getImages(nextQuery, nextPage);

        if (imageList.totalHits === 0) {
          alert('Images not found');
        }
        this.setState(state => ({
          images: [...state.images, ...imageList.hits],
          loading: false,
          totalHits: imageList.totalHits,
        }));
      } catch (error) {
        this.setState({ error: true, loading: false });
        console.log(error);
      }
    }

    if (images.length !== 0 && !btnIsVisible && images.length < totalHits) {
      this.setState({ btnIsVisible: true });
    } else if (images.length >= totalHits && btnIsVisible) {
      this.setState({ btnIsVisible: false });
    }
  }

  onLoadMoreBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, btnIsVisible } = this.state;

    return (
      <>
        <Gallery>
          {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </Gallery>
        {btnIsVisible && (
          <Button images={images} onClick={this.onLoadMoreBtnClick} />
        )}
        {loading && <Loader />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};
