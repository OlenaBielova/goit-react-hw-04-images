import { useState } from 'react';
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';

export function App() {
  const [query, setQuery] = useState('');

  const onSubmit = currentQuery => {
    setQuery(currentQuery);
  };

  return (
    <Container>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery searchQuery={query} />
    </Container>
  );
}
