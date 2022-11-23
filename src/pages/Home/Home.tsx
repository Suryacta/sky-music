import React from 'react';
import AllAlbums from '../../components/AllAlbums/AllAlbums';
import StyledHome from './Home.styles';

const Home = ({ search }: React.Dispatch<React.SetStateAction<string>> | string | any) => {
  return (
    <StyledHome>
      <AllAlbums search={search} />
    </StyledHome>
  );
};

export default Home;
