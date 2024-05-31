import { useParams } from 'react-router-dom';
import SearchResultTemplate from '../components/template/SearchResultTemplate';
import { useSearchMovie } from '../hooks/useSearchMovie';

const SearchResultPage = () => {
  const params = useParams<{ movie: string }>();
  const movieTitle = params.movie || '';
  const { searchMovieState } = useSearchMovie(movieTitle);
  return (
    <>
      {searchMovieState?.data && (
        <SearchResultTemplate searchMovieList={searchMovieState?.data} />
      )}
    </>
  );
};

export default SearchResultPage;
