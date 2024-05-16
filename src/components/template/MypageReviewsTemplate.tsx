import styled from 'styled-components';
import DivideVector from '../atoms/DivideVector';
import ReviewCard from '../organisms/ReviewCard';

interface MypageReviewTemplateProps {
  name: string;
  count: number;
}

const REVIEW_DATA = [
  {
    id: 123,
    reviewer: '김동영',
    grade: 4.5,
    content: '아니이건좀 아닌데',
    count: 3,
    date: 2024,
    isLiked: false,
    isMine: true,
  },
  {
    id: 123123,
    reviewer: '김동영',
    grade: 4.5,
    content: '아니이건좀 아닌데',
    count: 3,
    date: 2024,
    isLiked: false,
    isMine: true,
  },
  {
    id: 123123123,
    reviewer: '김동영',
    grade: 4.5,
    content: '아니이건좀 아닌데',
    count: 3,
    date: 2024,
    isLiked: false,
    isMine: true,
  },
];

const MypageReviewsTemplate = ({ name, count }: MypageReviewTemplateProps) => {
  const handleHeartClick = (id: number) => {};
  return (
    <MypageContainer>
      <TextBox>
        <Text>
          <EmphasisText>{name}</EmphasisText>
          님의 리뷰는 총 <EmphasisText>{count}</EmphasisText> 개 입니다
        </Text>
      </TextBox>
      <DivideVector />
      <ReviewContainer>
        {REVIEW_DATA.map((item) => (
          <ReviewCard
            key={item.id}
            id={item.id}
            reviewer={item.reviewer}
            grade={item.grade}
            content={item.content}
            count={item.count}
            date={item.date}
            isLiked={item.isLiked}
            isMine={item.isMine}
            onHeartClick={() => handleHeartClick(item.id)}
          />
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
