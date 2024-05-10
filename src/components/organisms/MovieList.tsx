import styled from 'styled-components';
import MovieListCard, { MovieListCardProps } from '../molecules/MovieListCard';

const LIST_DATA = [
  { id: 1, img: '', title: '브레드', grade: 4.5, isLiked: true },
  { id: 1, img: '', title: '김김', grade: 4.5, isLiked: true },
  { id: 1, img: '', title: '다다', grade: 4.5, isLiked: false },
  { id: 1, img: '', title: '서', grade: 4.3, isLiked: true },
  {
    id: 1,
    img: '',
    title: '해리포터와 아즈카반의 죄수',
    grade: 4.5,
    isLiked: true,
  },
  { id: 1, img: '', title: '상태', grade: 4.5, isLiked: true },
  { id: 1, img: '', title: '나', grade: 4.5, isLiked: true },
  { id: 1, img: '', title: '축구', grade: 4.5, isLiked: true },
  { id: 1, img: '', title: '우리집 강아지', grade: 4.5, isLiked: true },
];

interface MovieListProps {
  isGenre: boolean;
  listData: MovieListCardProps[];
}

const MovieList = ({ isGenre, listData }: MovieListProps) => {
  const handleCardClick = () => {
    //영화 정보페이지로 이동
  };
  return (
    <MovieListContainer>
      {isGenre && <GenreName />}
      {LIST_DATA.map((item) => (
        <MovieButton key={item.id} onClick={handleCardClick}>
          <MovieListCard
            id={item.id}
            img={item.img}
            title={item.title}
            grade={item.grade}
            isLiked={item.isLiked}
          />
        </MovieButton>
      ))}
    </MovieListContainer>
  );
};

export default MovieList;

const MovieListContainer = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  background-color: rgba(163, 163, 163, 0.1);
  padding: 24px 40px;
  gap: 10px;
  overflow-x: scroll;
`;

const GenreName = styled.div`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 14px;
  font-weight: 700;
`;

const MovieButton = styled.button``;
