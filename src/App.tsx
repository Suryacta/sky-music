import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "./App.css";
import { fetchAlbumData } from './store/album-slice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbumData());
  }, []);
  return (
    <>
      <div>App</div>
      <div>aa</div>
    </>
  );
};

export default App;
