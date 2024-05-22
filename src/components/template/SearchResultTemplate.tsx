import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DivideVector from '../atoms/DivideVector';
import MovieCard from '../molecules/MovieCard';

export interface SearchData {
  img: string;
  title: string;
  date: number;
  grade: number;
  id: number;
}

const DATA_LIST: SearchData[] = [
  { title: '브레드 이발소', img: '', grade: 4.3, date: 2024, id: 1 },
  { title: '브레드 이발소', img: '', grade: 4.3, date: 2024, id: 2 },
  { title: '브레드 이발소', img: '', grade: 4.3, date: 2024, id: 123 },
  { title: '브레드 이발소', img: '', grade: 4.3, date: 2024, id: 1234 },
];

const SearchResultTemplate = () => {
  return (
    <TitleContainer>
      <SearchText>검색된 결과</SearchText>
      <DivideVector />
      <SearchResultContainer>
        {DATA_LIST.map((item) => (
          <Link to={`/movie/${item.id}`} key={item.id}>
            <MovieCard
              id={item.id}
              movieImg={item.img}
              title={item.title}
              date={item.date}
              grade={item.grade}
            />
          </Link>
        ))}
      </SearchResultContainer>
    </TitleContainer>
  );
};

export default SearchResultTemplate;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px;
`;

const SearchText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const SearchResultContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
`;
