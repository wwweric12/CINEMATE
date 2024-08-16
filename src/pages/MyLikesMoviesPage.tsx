import { PostMovieLike } from '../api/likeFetcher';
import MypageMoviesTemplate from '../components/template/MypageMoviesTemplate';
import { useMyMovie } from '../hooks/useMyMovies';

const MyLikesMoviesPage = () => {
  const {  isMyMovieLoading,isMyMovieError,myMovieState, } = useMyMovie();

  const handleCancelClick = async (movieId: number) => {
    const res = await PostMovieLike({ movieId });
    alert(res?.data);
  };

  

  if (isMyMovieLoading) {
    return <div>Loding...</div>;
  }
  if (!myMovieState) {
    return null;
  }
  return (
    <MypageMoviesTemplate
      myMovieList={myMovieState.data.movies}
      onCancelClick={handleCancelClick}
      state="likes"
    />
  );
};

export default MyLikesMoviesPage;
