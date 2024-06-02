import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieListTemplate from '../components/template/MovieListTemplate';
import { useRecommendMovie } from '../hooks/useRecommendMovie';
import { PostMovieLike } from '../api/likeFetcher';

const MovieListPage = () => {
  const navigate = useNavigate();
  const { isMovieLoading, movieState } = useRecommendMovie();
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('로그인 정보가 유효하지 않습니다.');
      navigate('/login');
    }
  }, []);

  const handleHeartClick = async (movieId: number) => {
    const res = await PostMovieLike({ movieId });
  };

  if (isMovieLoading) {
    return <div>Loding...</div>;
  }
  if (!movieState) {
    return null;
  }
  
  return (
    <>
      <MovieListTemplate
        onMovieHeartClick={handleHeartClick}
        defaultRecommendResult={movieState?.data.defaultRecommendResult}
        genreMovieLists={movieState?.data.genreMovieLists}
      />
    </>
  );
};

export default MovieListPage;
