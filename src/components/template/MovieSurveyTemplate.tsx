import styled from 'styled-components';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import Description from '../atoms/Description';
import MovieSurveyForm from '../organisms/MovieSurveyForm';
import { MovieData } from '../../types/GetMovieListPayload';
import {
  SurveyListState,
  surveyListState,
} from '../../store/atoms/Movie/state';
import { PostSurvey } from '../../api/surveyFetcher';

export interface MovieSurveyTemplateProps {
  surveyList: MovieData[];
}

const MovieSurveyTemplate = ({ surveyList }: MovieSurveyTemplateProps) => {
  const navigate = useNavigate();
  const [surveyListData, setSurveyListData] =
    useRecoilState<SurveyListState>(surveyListState);

  useEffect(() => {
    const updateData = surveyList.map((item) => ({ ...item, selected: false }));
    setSurveyListData((prev) => {
      return {
        ...prev,
        movie: updateData,
      };
    });
  }, []);

  const handleSelectedSurvey = () => {
    const movieIds: number[] = surveyListData.movie.reduce<number[]>(
      (movies, item) => {
        if (item.selected) {
          movies.push(item.id);
        }
        return movies;
      },
      [],
    );
    const genreIds: number[] = surveyListData.genre.reduce<number[]>(
      (genres, item) => {
        if (item.selected) {
          genres.push(item.id);
        }
        return genres;
      },
      [],
    );
    return { movieIds, genreIds };
  }

  const handleSurveySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { movieIds, genreIds } = handleSelectedSurvey();
    const res = PostSurvey({ movieIds, genreIds });
    navigate('/survey/success');
  };


  return (
    <TemplateContainer>
      <Description
        title="관심있는 영화를 선택해주세요"
        content="최대 6가지의 영화를 선택하실 수 있습니다"
        state="survey"
      />
      <MovieSurveyForm
        surveyList={surveyList}
        onSurveySubmit={handleSurveySubmit}
      />
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
