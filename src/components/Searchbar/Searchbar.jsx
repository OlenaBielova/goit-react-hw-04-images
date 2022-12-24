import { useState } from 'react';
import {
  SearchContainer,
  SearchForm,
  SearchButton,
  Label,
  Input,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    document.getElementById('searchForm').reset();

    if (query === '') {
      alert('Type your search query!');
    } else {
      onSubmit(query);
    }
  };

  return (
    <SearchContainer>
      <SearchForm id="searchForm" onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <FaSearch />
          <Label />
        </SearchButton>
        <Input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchContainer>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
