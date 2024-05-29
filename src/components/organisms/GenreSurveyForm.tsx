import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import GenreSurveyImg from '../atoms/GenreSurveyImg';
import { Genre } from '../../store/atoms/Genre/state';
import PrimaryButton from '../atoms/PrimaryButton';
import { GENRE_LIST, GenreData } from '../../util/data/GenreDate';
import {
  SurveyListState,
  surveyListState,
} from '../../store/atoms/Movie/state';

const GenreSurveyForm = () => {
  const [surveyListData, setSurveyListData] =
    useRecoilState<SurveyListState>(surveyListState);
  const navigate = useNavigate();
  const countSelectedGenre = (obj: Genre[]) => {
    return obj.filter((value) => value.selected).length;
  };

  const handleSelectedGenre = (item: GenreData) => {
    if (countSelectedGenre(surveyListData.genre) < 3) {
      setSurveyListData((prev) => ({
        ...prev,
        genre: prev.genre.map((value) =>
          value.key === item.type
            ? { ...value, selected: !value.selected }
            : value,
        ),
      }));
    } else {
      setSurveyListData((prev) => ({
        ...prev,
        genre: prev.genre.map((value) =>
          value.key === item.type ? { ...value, selected: false } : value,
        ),
      }));
    }
  };

  const handleSurveySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/survey/movies');
    setSurveyListData((prev) => ({ ...prev, genre: surveyListData.genre }));
  };

  return (
    <FormContainer onSubmit={handleSurveySubmit}>
      <GenreContainer>
        {GENRE_LIST.map((item) => (
          <GenreButton
            type="button"
            key={item.type}
            onClick={() => handleSelectedGenre(item)}
          >
            <GenreSurveyImg
              name={item.name}
              src={item.image}
              isChecked={
                surveyListData.genre.find((value) => value.key === item.type)
                  ?.selected || false
              }
            />
          </GenreButton>
        ))}
      </GenreContainer>
      <PrimaryButton
        size="medium"
        type="submit"
        state={countSelectedGenre(surveyListData.genre) === 3}
        enabled={countSelectedGenre(surveyListData.genre) === 3}
      >
        다음으로
      </PrimaryButton>
    </FormContainer>
  );
};

export default GenreSurveyForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GenreContainer = styled.div`
  width: 280px;
  height: 400px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 56px;
`;

const GenreButton = styled.button``;
