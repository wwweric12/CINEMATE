import styled from 'styled-components';
import GradeStar from '../atoms/GradeStar';
import PrimaryButton from '../atoms/PrimaryButton';
import { createArray } from '../../util/CreateArray';
import { PutRatingProps } from '../../api/ratingFetcher';

interface RatingMovieProps {
  movieId: number;
  onRatingClick: ({ movieId, rating }: PutRatingProps) => void;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const RatingMovie = ({
  movieId,
  onRatingClick,
  score,
  setScore,
}: RatingMovieProps) => {
  const starArray = createArray(5);
  return (
    <Container>
      <Text>평가하기</Text>
      <StarContainer>
        {starArray.map((index) => (
          <GradeStar
            key={index}
            movieId={movieId}
            index={index + 1}
            score={score}
            setScore={setScore}
            onRatingClick={onRatingClick}
          />
        ))}
      </StarContainer>
      <PrimaryButton type="button" size="medium" state onClick={() => {}}>
        리뷰 작성하기
      </PrimaryButton>
    </Container>
  );
};

export default RatingMovie;

const Container = styled.div`
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
