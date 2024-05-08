import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import GenreSurveyImg from '../atoms/GenreSurveyImg';
import { GenreList, genreListState } from '../../store/atoms/Genre/state';
import PrimaryButton from '../atoms/PrimaryButton';
import { GENRE_LIST, Genre } from '../../util/data/GenreDate';

const GenreSurveyForm = () => {
  const [genreList, setGenreList] = useRecoilState(genreListState);
  const navigate = useNavigate();
  const countSelectedGenre = (obj: GenreList) => {
    return Object.values(obj).filter((value) => value === true).length;
  };

  const handleSelectedGenre = (item: Genre) => {
    if (countSelectedGenre(genreList) < 3) {
      setGenreList((prevGenreList) => ({
        ...prevGenreList,
        [item.name]: !prevGenreList[item.name],
      }));
    } else {
      setGenreList((prevGenreList) => ({
        ...prevGenreList,
        [item.name]: false,
      }));
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
              isChecked={genreList[item.name]}
            />
          </GenreButton>
        ))}
      </GenreContainer>
      <PrimaryButton
        size="medium"
        type="submit"
        state={countSelectedGenre(genreList) == 3}
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
