import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import PrimaryButton from '../atoms/PrimaryButton';
import {
  MovieState,
  SurveyListState,
  surveyListState,
} from '../../store/atoms/Movie/state';
import MovieSurveyImg from '../atoms/MovieSurveyImg';
import { MovieData } from '../../types/GetMovieListPayload';

export interface MovieSurveyFormProps {
  surveyList: MovieData[];
  onSurveySubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MovieSurveyForm = ({
  surveyList,
  onSurveySubmit,
}: MovieSurveyFormProps) => {
  const [surveyListData, setSurveyListData] =
    useRecoilState<SurveyListState>(surveyListState);

  const countSelectedMovie = (arr: MovieState[]) => {
    return arr.filter((value) => value.selected).length;
  };

  const handleSelectedMovie = (item: MovieData) => {
    if (countSelectedMovie(surveyListData.movie) < 6) {
      setSurveyListData((prev) => ({
        ...prev,
        movie: prev.movie.map((value) =>
          value.id === item.id
            ? { ...value, selected: !value.selected }
            : value,
        ),
      }));
    } else {
      setSurveyListData((prev) => ({
        ...prev,
        movie: prev.movie.map((value) =>
          value.id === item.id ? { ...value, selected: false } : value,
        ),
      }));
    }
  };

  const handleCheckImg = (item: MovieData) => {
    return (
      surveyListData.movie.find((value) => value.id === item.id)?.selected ||
      false
    );
  };

  return (
    <FormContainer onSubmit={onSurveySubmit}>
      <MovieContainer>
        {surveyList.map((item) => (
          <MovieButton
            type="button"
            key={item.id}
            onClick={() => handleSelectedMovie(item)}
          >
            <MovieSurveyImg
              src={item.posterPath}
              isChecked={handleCheckImg(item)}
            />
          </MovieButton>
        ))}
      </MovieContainer>
      <PrimaryButton
        size="medium"
        type="submit"
        state={countSelectedMovie(surveyListData.movie) > 0}
        enabled={countSelectedMovie(surveyListData.movie) > 0}
      >
        다음으로
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
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 56px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MovieButton = styled.button``;
