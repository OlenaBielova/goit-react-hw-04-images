import React, { Component } from 'react';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';

export class App extends Component {
  state = {
    query: '',
  };

  onSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery query={this.state.query} />
      </Container>
    );
  }
}
