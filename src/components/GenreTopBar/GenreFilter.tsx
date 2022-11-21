import React from 'react';
import StyledGenreFilter from './GenreFilter.styles';

const GenreFilter = ({
  genre, setData,
}: any) => {
  const albumData = genre.payload?.feed.entry;
  const genreData = albumData?.map((category: any) => category.category.attributes.term);
  const distinctGenreData = genreData
    ?.filter((item: any, index: number) => genreData
      .indexOf(item) === index);

  const handleGenreFilter : any = (genreFilter: any) => {
    const category = albumData
      ?.filter((filterCategory:any) => filterCategory
        .category.attributes.term === genreFilter);
    setData(category);
  };

  return (
    <StyledGenreFilter>
      <p>Moods & Genres</p>
      {distinctGenreData?.map((genreFilter: any) => {
        return (
          <div className="genre-content">
            <button className="genre-options" type="button" onClick={() => handleGenreFilter(genreFilter)}>{genreFilter}</button>
          </div>
        );
      })}
    </StyledGenreFilter>
  );
};

export default GenreFilter;
