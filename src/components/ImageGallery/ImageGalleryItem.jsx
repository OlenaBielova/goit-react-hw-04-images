import React, { Component } from 'react';
import { Modal } from 'components/Modal';
import { Image, GalleryItem } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidUpdate() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({ isModalOpen: false });
      document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    const { isModalOpen } = this.state;

    return (
      <GalleryItem>
        <Image onClick={this.openModal} src={webformatURL} alt={tags} />
        {isModalOpen && (
          <Modal onClick={this.closeModal} src={largeImageURL} alt={tags} />
        )}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};