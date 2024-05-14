import styled from 'styled-components';
import MovieList from '../organisms/MovieList';
import ListTitle from '../atoms/ListTitle';
import { MovieListCardProps } from '../molecules/MovieListCard';

export const LIST_DATA: MovieListCardProps[] = [
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

export interface GenreListProps {
  genre: string;
  data: MovieListCardProps[];
}

interface MovieListTemplateProps {
  userMovieList?: MovieListCardProps[];
  genreMovieList: GenreListProps[];
}

const MovieListTemplate = ({
  userMovieList,
  genreMovieList,
}: MovieListTemplateProps) => {
  return (
    <TemplateContainer>
      <TitleLayout>
        <ListTitle title="사용자 맞춤 " />
      </TitleLayout>
      <MovieList listData={LIST_DATA} />
      <TitleLayout>
        <ListTitle title="선호하는 장르별 " />
      </TitleLayout>
      <GenreContainer>
        {genreMovieList.map((item) => (
          <MovieList
            key={item.genre}
            isGenre
            listData={item.data}
            genre={item.genre}
          />
        ))}
      </GenreContainer>
    </TemplateContainer>
  );
};

export default MovieListTemplate;

const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;
`;

const TitleLayout = styled.div`
  padding: 40px 0 16px 40px;
`;

const GenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
