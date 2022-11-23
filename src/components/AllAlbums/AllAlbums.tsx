import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../../shared/components/Loader/Loader";
import { RootState } from "../../store";
import GenreFilter from "../GenreTopBar/GenreFilter";
import { StyledAllAlbums, StyledPaginateButton } from "./AllAlbums.styles";

const AllAlbums = ({ search }: React.Dispatch<React.SetStateAction<string>> | string | any) => {
  const [showMore, setShowMore] = useState(8);
  const [data, setData] = useState([]);
  const { album, loading } = useSelector((state: RootState) => state.albumActions) || [];
  const albumData = album.payload?.feed.entry;
  useEffect(() => {
    if (search === "") {
      setData(albumData);
    } else if (search.length > 2) {
      const newList = albumData?.filter(
        (list: { [x: string]: { label: string; }; }) => list["im:name"].label.toLowerCase().includes(search.toLowerCase())
          || list["im:artist"].label.toLowerCase().includes(search.toLowerCase()),
      );
      setData(newList);
    }
  }, [albumData, search]);

  return (
    <>
      {loading && <Loader loading={loading} />}
      {!loading && (
        <StyledAllAlbums data-testid="album-content">
          <GenreFilter genre={album} setData={setData} />
          <div className="albums">
            {data?.slice(0, showMore).map((entry: {
              "im:image": {
                label: string;
            } | any
              title: {
                label: string,
              },
              link:{
                attributes:{
                  href: string,
                }
              }
            }) => {
              return (
                <div className="album-entry">
                  <img
                    src={entry["im:image"][2].label}
                    alt="album-thumbnail"
                    className="album-thumbnail"
                  />
                  <a href={entry.link.attributes.href} target="_blank" rel="noreferrer">{entry.title.label}</a>
                </div>
              );
            })}
          </div>
        </StyledAllAlbums>
      )}
      {showMore <= data?.length && (
        <StyledPaginateButton data-testid="pagination">
          <button
            onClick={() => {
              setShowMore((prevValue) => prevValue + 8);
            }}
            type="button"
            className="show-more"
          >
            Load More
          </button>
        </StyledPaginateButton>
      )}
    </>
  );
};

export default AllAlbums;
