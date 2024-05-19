import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import GenreSurveyImg from '../atoms/GenreSurveyImg';
import { Genre, genreListState } from '../../store/atoms/Genre/state';
import PrimaryButton from '../atoms/PrimaryButton';
import { GENRE_LIST, GenreImage } from '../../util/data/GenreDate';

const GenreSurveyForm = () => {
  const [genreList, setGenreList] = useRecoilState<Genre[]>(genreListState);
  const navigate = useNavigate();
  const countSelectedGenre = (obj: Genre[]) => {
    return obj.filter((value) => value.selected).length;
  };

  const handleSelectedGenre = (item: GenreImage) => {
    if (countSelectedGenre(genreList) < 3) {
      setGenreList(
        genreList.map((value) =>
          value.key === item.type
            ? { ...value, selected: !value.selected }
            : value,
        ),
      );
    } else {
      setGenreList(
        genreList.map((value) => {
          if (value.key === item.type) {
            return { ...value, selected: false };
          } else {
            return value;
          }
        }),
      );
    }
  };

  const handleSurveySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/survey/movies/1');
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
                genreList.find((value) => value.key === item.type)?.selected ||
                false
              }
            />
          </GenreButton>
        ))}
      </GenreContainer>
      <PrimaryButton
        size="medium"
        type="submit"
        state={countSelectedGenre(genreList) === 3}
        enabled={countSelectedGenre(genreList) === 3}
      >
        다음으로 1/3
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
