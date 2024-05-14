import styled from 'styled-components';
import { useState } from 'react';
import etcSvg from '../../assets/images/etc.svg';
import ReviewGrade from '../atoms/ReviewGrade';
import HeartButton from '../atoms/HeartButton';
import EtcButton from './EtcButton';

interface ReviewCard {
  reviewer: string;
  grade: number;
  content: string;
  date: number;
  count: number;
  isLiked?: boolean;
  isMine?: boolean;
  onHeartClick: () => void;
}

const ReviewCard = ({
  reviewer,
  grade,
  content,
  date,
  count,
  isLiked,
  isMine,
  onHeartClick,
}: ReviewCard) => {
  const [etcState, setEtcState] = useState(false);
  const handleEtc = () => {
    setEtcState((prev) => !prev);
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
                <EtcButton />
              </ButtonContainer>
            )}
          </EtcContainer>
        ) : (
          <ReviewDate>{date}일전</ReviewDate>
        )}
      </CardHeader>
      <ReviewContent>{content}</ReviewContent>
      <CardFooter>
        <HeartButton isLiked={isLiked} onClick={onHeartClick} />
        <LikeCount>{count}개</LikeCount>
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
