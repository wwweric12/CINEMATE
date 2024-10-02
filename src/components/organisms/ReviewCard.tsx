import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import etcSvg from '../../assets/images/etc.svg';
import ReviewGrade from '../atoms/ReviewGrade';
import HeartButton from '../atoms/HeartButton';
import { ReviewProps } from '../../api/likeFetcher';
import { formatTime } from '../../util/date';
import EtcButton from './EtcButton';

interface ReviewCardProps {
  id: number;
  movieId: number;
  reviewer: string;
  grade: number;
  content: string;
  date: Date;
  count: number;
  isLiked?: boolean;
  isMine?: boolean;
  onReviewHeartClick?: ({ movieId, reviewId }: ReviewProps) => void;
  onDeleteClick?: (movieId: number) => void;
}

const ReviewCard = ({
  id,
  movieId,
  reviewer,
  grade,
  content,
  date,
  count,
  isLiked,
  isMine,
  onReviewHeartClick,
  onDeleteClick,
}: ReviewCardProps) => {
  const navigate = useNavigate();
  const [etcState, setEtcState] = useState(false);
  const [likedState, setLikedState] = useState(isLiked);
  const [heartCount, setHeartCount] = useState(count);

  const handleEtc = () => {
    setEtcState((prev) => !prev);
  };

  const handeHeartCount = () => {
    if (!isMine) {
      if (likedState) {
        setHeartCount((prev) => prev - 1);
      } else {
        setHeartCount((prev) => prev + 1);
      }
      setLikedState((prev) => !prev);
    }
  };
  const handleModifyClick = () => {
    navigate(`/movies/${movieId}/review`, { state: 'update' });
  };

  return (
    <ReviewCardContainer>
      <CardHeader>
        <HeaderBox>
          <Reviewer>{reviewer}</Reviewer>
          <ReviewGrade grade={grade} />
        </HeaderBox>
        {isMine ? (
          <EtcContainer>
            <Etc onClick={handleEtc}>
              <EtcImg src={etcSvg} />
            </Etc>
            {etcState && (
              <ButtonContainer>
                {onDeleteClick && (
                  <EtcButton
                    movieId={movieId}
                    onDeleteClick={onDeleteClick}
                    onModifyClick={handleModifyClick}
                  />
                )}
              </ButtonContainer>
            )}
          </EtcContainer>
        ) : (
          <ReviewDate>{formatTime(date)}</ReviewDate>
        )}
      </CardHeader>
      <ReviewContent>{content}</ReviewContent>
      <CardFooter>
        <HeartButton
          isMine={isMine}
          isLiked={isLiked}
          onClick={() => {
            onReviewHeartClick && onReviewHeartClick({ movieId, reviewId: id });
            handeHeartCount();
          }}
        />
        <LikeCount>{heartCount}개</LikeCount>
      </CardFooter>
    </ReviewCardContainer>
  );
};

export default ReviewCard;

const ReviewCardContainer = styled.div`
  width: 100%;
  padding: 18px 20px;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  width: 100%;
  min-height: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Reviewer = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-right: 8px;
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
`;

const EtcContainer = styled.div`
  position: relative;
`;

const Etc = styled.button`
  height: max-content;
`;

const EtcImg = styled.img``;

const ButtonContainer = styled.div`
  position: absolute;
  z-index: 2;
  left: -36px;
`;

const ReviewDate = styled.div`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: 12px;
`;

const ReviewContent = styled.div`
  width: 100%;
  min-height: 52px;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 5px;
`;

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LikeCount = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray1};
`;
