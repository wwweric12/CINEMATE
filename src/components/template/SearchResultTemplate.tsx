import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DivideVector from '../atoms/DivideVector';
import MovieCard from '../molecules/MovieCard';
import { MovieData } from '../../types/GetMovieListPayload';

interface SearchResultTemplate {
  searchMovieList: MovieData[];
}

const SearchResultTemplate = ({ searchMovieList }: SearchResultTemplate) => {
  return (
    <TitleContainer>
      <SearchText>검색된 결과</SearchText>
      <DivideVector />
      <SearchResultContainer>
        {searchMovieList.map((item) => (
          <Link to={`/movies/${item.id}`} key={item.id} state={"search"}>
            <MovieCard
              id={item.id}
              date={item.releaseDate}
              movieImg={item.posterPath}
              title={item.movieTitle}
              grade={item.rating}
            />
          </Link>
        ))}
      </SearchResultContainer>
    </TitleContainer>
  );
};

export default SearchResultTemplate;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px;
`;

const SearchText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const SearchResultContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;
