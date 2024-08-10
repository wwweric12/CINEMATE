import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import DivideVector from '../atoms/DivideVector';
import MovieCard from '../molecules/MovieCard';
import { MovieData } from '../../types/GetMovieListPayload';
import { validArray } from '../../util/validArray';
import { searchState } from '../../store/atoms/Search/state';
import SearchCard from '../atoms/SearchCard';

interface SearchResultTemplate {
  searchMovieList: MovieData[];
}

const SearchResultTemplate = ({ searchMovieList }: SearchResultTemplate) => {
  const [searchMovie, setSearchMovie] = useRecoilState(searchState);
  if (validArray(searchMovie)) {
    return (
      <ListContainer>
        {searchMovie?.map((item) => (
          <Link to={`/movies/${item.id}`} key={item.id}>
            <SearchCard movieImg={item.posterPath} title={item.movieTitle} />
          </Link>
        ))}
      </ListContainer>
    );
  } else {
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
}
};

export default SearchResultTemplate;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 40px;
`;

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
