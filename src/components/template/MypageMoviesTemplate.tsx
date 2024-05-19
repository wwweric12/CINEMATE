import styled from 'styled-components';
import DivideVector from '../atoms/DivideVector';
import MovieCard from '../molecules/MovieCard';
import MovieListCard from '../molecules/MovieListCard';

interface MypageMoviesTemplateProps {
  count: number;
}

const REVIEW_DATA = [
  { id: 1, movieImg: '', title: '브레드 이발소', date: 2024, grade: 4.5 },
  { id: 2, movieImg: '', title: '브레드 이발소', date: 2024, grade: 4.5 },
  { id: 3, movieImg: '', title: '브레드 이발소', date: 2024, grade: 4.5 },
  { id: 113431, movieImg: '', title: '브레드 이발소', date: 2024, grade: 4.5 },
];

const MypageMoviesTemplate = ({ count }: MypageMoviesTemplateProps) => {
  const handleCancelClick = (id: number) => {};
  return (
    <MypageContainer>
      <TextBox>
        <Text>
          좋아하는 영화는 총 <EmphasisText>{count}</EmphasisText> 개 입니다
        </Text>
      </TextBox>
      <DivideVector />
      <ReviewContainer>
        {REVIEW_DATA.map((item) => (
          <MovieCard
            key={item.id}
            id={item.id}
            movieImg={item.movieImg}
            title={item.title}
            date={item.date}
            grade={item.grade}
            onCancelClick={() => handleCancelClick(item.id)}
          />
        ))}
      </ReviewContainer>
    </MypageContainer>
  );
};

export default MypageMoviesTemplate;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 94px 26px;
`;

const TextBox = styled.div`
  display: flex;
  margin-bottom: 14px;
`;

const EmphasisText = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 22px;
`;
