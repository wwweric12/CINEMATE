import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import PrimaryButton from '../atoms/PrimaryButton';
import {
  MovieListState,
  MovieState,
  movieListState,
} from '../../store/atoms/Movie/state';
import MovieSurveyImg from '../atoms/MovieSurveyImg';
import { MOCK_DATA, MovieSurveyData } from '../template/MovieSurveyTemplate';

const MovieSurveyForm = () => {
  const [movieList, setMovieList] =
    useRecoilState<MovieListState>(movieListState);

  const param = useParams();
  const navigate = useNavigate();

  const countSelectedMovie = (arr: MovieState[]) => {
    return arr.filter((value) => value.selected).length;
  };

  const handleSelectedMovie = (item: MovieSurveyData) => {
    if (param.id === '1') {
      if (countSelectedMovie(movieList.first) < 3) {
        setMovieList((prev) => ({
          ...prev,
          first: prev.first.map((value) =>
            value.id === item.id
              ? { ...value, selected: !value.selected }
              : value,
          ),
        }));
      } else {
        setMovieList((prev) => ({
          ...prev,
          first: prev.first.map((value) =>
            value.id === item.id ? { ...value, selected: false } : value,
          ),
        }));
      }
    } else if (param.id === '2') {
      if (countSelectedMovie(movieList.second) < 3) {
        setMovieList((prev) => ({
          ...prev,
          second: prev.second.map((value) =>
            value.id === item.id
              ? { ...value, selected: !value.selected }
              : value,
          ),
        }));
      } else {
        setMovieList((prev) => ({
          ...prev,
          second: prev.second.map((value) =>
            value.id === item.id ? { ...value, selected: false } : value,
          ),
        }));
      }
    }
  };

  const handleSurveySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (param.id === '1') {
      navigate('/survey/movies/2');
    } else {
      navigate('/survey/success');
    }
  };

  const handleCheckImg = (item: MovieSurveyData) => {
    if (param.id === '1') {
      return (
        movieList.first.find((value) => value.id === item.id)?.selected || false
      );
    } else {
      return (
        movieList.second.find((value) => value.id === item.id)?.selected ||
        false
      );
    }
  };

  return (
    <FormContainer onSubmit={handleSurveySubmit}>
      <MovieContainer>
        {MOCK_DATA.map((item) => (
          <MovieButton
            type="button"
            key={item.id}
            onClick={() => handleSelectedMovie(item)}
          >
            <MovieSurveyImg src={item.image} isChecked={handleCheckImg(item)} />
          </MovieButton>
        ))}
      </MovieContainer>
      <PrimaryButton
        size="medium"
        type="submit"
        state={
          param.id === '1'
            ? countSelectedMovie(movieList.first) > 0
            : countSelectedMovie(movieList.second) > 0
        }
        enabled={
          param.id === '1'
            ? countSelectedMovie(movieList.first) > 0
            : countSelectedMovie(movieList.second) > 0
        }
      >
        다음으로 {Number(param.id) + 1}/3
      </PrimaryButton>
    </FormContainer>
  );
};

export default MovieSurveyForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieContainer = styled.div`
  width: 300px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 56px;
`;

const MovieButton = styled.button``;
