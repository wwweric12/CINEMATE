import styled from 'styled-components';
import MovieList from '../organisms/MovieList';
import ListTitle from '../atoms/ListTitle';
import { MovieListPayload } from '../../types/GetMovieListPayload';
import { GENRE_LIST } from '../../util/data/GenreDate';

interface MovieListTemplateProps extends MovieListPayload {
  onMovieHeartClick: (movieId: number) => void;
}

const MovieListTemplate = ({
  defaultRecommendResult,
  genreMovieLists,
  onMovieHeartClick,
}: MovieListTemplateProps) => {
  const handleGenre = (genreId: number) => {
    const genre = GENRE_LIST.filter((item) => item.id === genreId);
    return genre[0].name;
  };

  return (
    <TemplateContainer>
      <TitleLayout>
        <ListTitle title="사용자 맞춤 " />
      </TitleLayout>
      <MovieList
        listData={defaultRecommendResult}
        onMovieHeartClick={onMovieHeartClick}
      />
      <TitleLayout>
        <ListTitle title="선호하는 장르별 " />
      </TitleLayout>
      <GenreContainer>
        {genreMovieLists.map((item) => (
          <MovieList
            onMovieHeartClick={onMovieHeartClick}
            key={item.genreId}
            isGenre
            listData={item.movieList}
            genre={handleGenre(item.genreId)} //일단 아직 장르가 설정되지 않음
          />
        ))}
      </GenreContainer>
    </TemplateContainer>
  );
};

export default MovieListTemplate;

const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;
`;

const TitleLayout = styled.div`
  padding: 40px 0 16px 40px;
`;

const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
