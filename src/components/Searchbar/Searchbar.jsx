import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {
  SearchContainer,
  SearchForm,
  SearchButton,
  Label,
  Input,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    document.getElementById('searchForm').reset();

    if (this.state.query === '') {
      alert('Type your search query!');
    } else {
      this.props.onSubmit(this.state.query);
    }
  };

  render() {
    return (
      <SearchContainer>
        <SearchForm id="searchForm" onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <FaSearch />
            <Label />
          </SearchButton>
          <Input
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchContainer>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
