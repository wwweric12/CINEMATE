import styled from 'styled-components';
import DivideVector from '../atoms/DivideVector';
import MovieCard from '../molecules/MovieCard';
import { Movie } from '../../types/GetMyMoviesPayload';

interface MypageMoviesTemplateProps {
  myMovieList: Movie[];
  onCancelClick: (id: number) => void;
  state: "hates" | "likes"
}

const MypageMoviesTemplate = ({
  myMovieList,
  onCancelClick,
  state,
}: MypageMoviesTemplateProps) => {
  return (
    <MypageContainer>
      <TextBox>
        {state==="likes"&&<Text>
          좋아하는 영화는 총 <EmphasisText>{myMovieList.length}</EmphasisText>{' '}
          개 입니다
        </Text>}
        {state==="hates"&&<Text>
          관심없는 영화는 총 <EmphasisText>{myMovieList.length}</EmphasisText>{' '}
          개 입니다
        </Text>}
      </TextBox>
      <DivideVector />
      <ReviewContainer>
        {myMovieList.map((item) => (
          <MovieCard
            key={item.id}
            id={item.id}
            movieImg={item.posterPath}
            title={item.movieTitle}
            date={item.releaseDate}
            grade={item.rating}
            isMypage
            onCancelClick={() => onCancelClick(item.id)}
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
