import styled from 'styled-components';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import Description from '../atoms/Description';
import MovieSurveyForm from '../organisms/MovieSurveyForm';
import { MovieListState, movieListState } from '../../store/atoms/Movie/state';

export interface MovieSurveyData {
  id: number;
  image: string;
}

export const MOCK_DATA: MovieSurveyData[] = [
  { id: 1, image: '' },
  { id: 2, image: '' },
  { id: 3, image: '' },
  { id: 4, image: '' },
  { id: 5, image: '' },
  { id: 6, image: '' },
  { id: 7, image: '' },
  { id: 8, image: '' },
  { id: 9, image: '' },
];

const MovieSurveyTemplate = () => {
  const [movieList, setMovieList] =
    useRecoilState<MovieListState>(movieListState);
  const param = useParams();

  useEffect(() => {
    const updateData = MOCK_DATA.map((item) => ({ ...item, selected: false }));
    if (param.id === '1') {
      setMovieList((prev) => {
        return {
          ...prev,
          first: updateData,
        };
      });
    } else if (param.id === '2') {
      setMovieList((prev) => {
        return {
          ...prev,
          second: updateData,
        };
      });
    }
  }, [param]);

  return (
    <TemplateContainer>
      <Description
        title="관심있는 영화를 선택해주세요"
        content="최대 3가지의 영화를 선택하실 수 있습니다"
        state="survey"
      />
      <MovieSurveyForm />
    </TemplateContainer>
  );
};

export default MovieSurveyTemplate;

const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 108px 40px;
  gap: 40px;
`;
