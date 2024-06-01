import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DivideVector from '../atoms/DivideVector';
import ReviewCard from '../organisms/ReviewCard';
import { Review } from '../../types/GetReviewPayload';

interface MypageReviewTemplateProps {
  myReviewState: Review[];
  onDeleteClick: (movieId: number) => void;
}

const MypageReviewsTemplate = ({
  myReviewState,
  onDeleteClick,
}: MypageReviewTemplateProps) => {
  return (
    <MypageContainer>
      <TextBox>
        <Text>
          작성하신 리뷰는 총 <EmphasisText>{myReviewState.length}</EmphasisText>{' '}
          개 입니다
        </Text>
      </TextBox>
      <DivideVector />
      <ReviewContainer>
        {myReviewState.map((item) => (
          <Link to={`/movies/${item.movieId}`} key={item.id}>
          <ReviewCard
            movieId={item.movieId}
            id={item.id}
            reviewer={item.member.nickName}
            grade={item.rating}
            content={item.content}
            count={item.likes}
            date={item.createdAt}
            isLiked={item.isLiked}
            isMine={item.isMine}
            onDeleteClick={onDeleteClick}
          />
          </Link>
        ))}
      </ReviewContainer>
    </MypageContainer>
  );
};

export default MypageReviewsTemplate;

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
