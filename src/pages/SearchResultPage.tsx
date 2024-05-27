import { useParams } from 'react-router-dom';
import SearchResultTemplate from '../components/template/SearchResultTemplate';
import { useSearchMovie } from '../hooks/useSearchMovie';

const SearchResultPage = () => {
  const params = useParams<{ movie: string }>();
  const movieTitle = params.movie || '';
  const { SearchMovieState } = useSearchMovie(movieTitle);
  return (
    <>
      {SearchMovieState?.data && (
        <SearchResultTemplate searchMovieList={SearchMovieState?.data} />
      )}
    </>
  );
};

export default SearchResultPage;
