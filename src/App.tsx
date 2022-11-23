import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import GlobalHeader from "./components/GlobalHeader/GlobalHeader";
import Home from "./pages/Home/Home";
import { fetchAlbumData } from "./store/album-slice";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<React.Dispatch<React.SetStateAction<string>> | string>("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbumData());
  }, []);
  return (
    <>
      <GlobalHeader setSearch={setSearchTerm} />
      <Home search={searchTerm} />
    </>
  );
};

export default App;
