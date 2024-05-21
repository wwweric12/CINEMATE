import styled from 'styled-components';
import { useState } from 'react';
import GradeStar from '../atoms/GradeStar';
import PrimaryButton from '../atoms/PrimaryButton';

interface RatingMovieProps {
  onWriteReview: () => void;
}

const RatingMovie = ({ onWriteReview }: RatingMovieProps) => {
  const [score, setScore] = useState<number>(0);
  return (
    <Container>
      <Text>평가하기</Text>
      <StarContainer>
        {Array.from({ length: 5 }, (_, index) => (
          <GradeStar
            key={index}
            index={index + 1}
            score={score}
            setScore={setScore}
          />
        ))}
      </StarContainer>
      <PrimaryButton type="button" size="medium" state onClick={onWriteReview}>
        리뷰 작성하기
      </PrimaryButton>
    </Container>
  );
};

export default RatingMovie;

const Container = styled.div`
  margin-top: 100px;
  width: 280px;
  background-color: ${({ theme }) => theme.colors.darkgray6};
  display: flex;
  flex-direction: column;
  padding: 18px 32px 20px 32px;
  align-items: center;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.gray1};
  font-weight: 500;
  margin-bottom: 18px;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`;
