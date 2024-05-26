import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieListTemplate from '../components/template/MovieListTemplate';
import { useRecommendMovie } from '../hooks/useRecommendMovie';

const MovieListPage = () => {
  const navigate = useNavigate();
  const { isMovieLoading, MovieState } = useRecommendMovie();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('로그인 정보가 유효하지 않습니다.');
      navigate('/login');
    }
  }, []);

  if (isMovieLoading) {
    return <div>Loding...</div>;
  }
  if (!MovieState) {
    return null;
  }

  return (
    <>
      <MovieListTemplate
        defaultRecommendResult={MovieState?.data.defaultRecommendResult}
        genreMovieLists={MovieState?.data.genreMovieLists}
      />
    </>
  );
};

export default MovieListPage;
