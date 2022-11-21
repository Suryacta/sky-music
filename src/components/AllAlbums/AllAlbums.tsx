import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../shared/components/Loader/Loader";
import GenreFilter from "../GenreTopBar/GenreFilter";
import StyledAllAlbums from "./AllAlbums.styles";

const AllAlbums = ({ search }: any) => {
  const [showMore, setShowMore] = useState(9);
  const [data, setData] = useState([]);
  const { album, loading } = useSelector((state: any) => state.albumActions) || [];
  const albumData = album.payload?.feed.entry;
  useEffect(() => {
    if (search === "") {
      setData(albumData);
    } else if (search.length > 2) {
      const newList = albumData?.filter(
        (list: any) => list["im:name"].label.toLowerCase().includes(search.toLowerCase())
          || list["im:artist"].label.toLowerCase().includes(search.toLowerCase()),
      );
      setData(newList);
    }
  }, [albumData, search]);

  return (
    <>
      {loading && <Loader loading={loading} />}
      {!loading && (
      <StyledAllAlbums>
        <GenreFilter genre={album} setData={setData} />
        <div className="albums">
          {data?.slice(0, showMore).map((entry: any) => {
            return (
              <div className="album-entry">
                <img
                  src={entry["im:image"][2].label}
                  alt="album-thumbnail"
                  className="album-thumbnail"
                />
                <p>{entry.title.label}</p>
              </div>
            );
          })}
        </div>
      </StyledAllAlbums>
      )}
      <button
        onClick={() => setShowMore((prevValue) => prevValue + 9)}
        type="button"
      >
        Load More
      </button>
    </>
  );
};

export default AllAlbums;
