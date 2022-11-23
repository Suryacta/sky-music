import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import { StyledGenreFilter, StyledCustomSwiper } from "./GenreFilter.styles";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const GenreFilter = ({ genre, setData }: any) => {
  const albumData = genre.payload?.feed.entry;
  const [active, setActive] = useState<React.SetStateAction<undefined> | string[]>();
  const genreData = albumData?.map(
    (category:
      { category:
        { attributes: { term: string; }; }; }) => category.category.attributes.term,
  );
  const distinctGenreData = genreData?.filter(
    (item: [], index: number) => genreData.indexOf(item) === index,
  );

  const handleGenreFilter = (genreFilter: string[]) => {
    const category = albumData?.filter(
      (filterCategory:
        { category:
          { attributes:
            { term: string[]; }; }; }) => filterCategory.category.attributes.term === genreFilter,
    );
    setData(category);
  };

  return (
    <StyledCustomSwiper data-testid="genre-filter">
      <Swiper
        navigation
        slidesPerView={window.innerWidth < 900 ? 4 : 8}
        spaceBetween={window.innerWidth < 900 ? 1 : 20}
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        {distinctGenreData?.map((genreFilter: string[]) => {
          return (
            <SwiperSlide>
              <StyledGenreFilter>
                <div className="top-albums">
                  <button
                    className="genre-button"
                    type="button"
                    style={{
                      background: active === genreFilter ? "#EE354D" : "white",
                      color: active === genreFilter ? "#fff" : "black",
                    }}
                    onClick={() => {
                      setActive(genreFilter);
                      handleGenreFilter(genreFilter);
                    }}
                  >
                    {genreFilter}
                  </button>
                </div>
              </StyledGenreFilter>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledCustomSwiper>
  );
};

export default GenreFilter;
