import React from 'react';
import { Watch } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => (
  <Wrapper>
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      visible={true}
    />
  </Wrapper>
);
