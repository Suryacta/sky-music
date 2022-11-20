import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "./App.css";
import GlobalHeader from './components/GlobalHeader/GlobalHeader';
import { fetchAlbumData } from './store/album-slice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbumData());
  }, []);
  return (
    <GlobalHeader />
  );
};

export default App;
