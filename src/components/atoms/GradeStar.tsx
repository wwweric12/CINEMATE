import styled from 'styled-components';
import { ReactComponent as FillStar } from '../../assets/images/fill_big_star.svg';
import { ReactComponent as EmptyStar } from '../../assets/images/big_star.svg';
import { ReactComponent as HalfStar } from '../../assets/images/half_fill_star.svg';
import { PutRatingProps } from '../../api/ratingFetcher';

interface GradeStarProps {
  score: number;
  movieId: number;
  index: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  onRatingClick: ({ movieId, rating }: PutRatingProps) => void;
}

const GradeStar = ({
  score,
  movieId,
  index,
  setScore,
  onRatingClick,
}: GradeStarProps) => {
  const handleLeftClick = () => {
    const rating = index - 0.5;
    setScore(rating);
    onRatingClick({
      movieId: movieId,
      rating,
    });
  };

  const handleRightClick = () => {
    setScore(index);
    onRatingClick({
      movieId: movieId,
      rating: index,
    });
  };

  const renderStar = () => {
    if (index - score === 0.5) {
      return <HalfStar />;
    } else if (score >= index) {
      return <FillStar />;
    } else {
      return <EmptyStar />;
    }
  };

  return (
    <StarContainer>
      <ButtonContainer>
        <LeftButton onClick={handleLeftClick} />
        <RightButton onClick={handleRightClick} />
      </ButtonContainer>
      {renderStar()}
    </StarContainer>
  );
};

export default GradeStar;

const StarContainer = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftButton = styled.button`
  width: 14px;
`;

const RightButton = styled.button`
  width: 14px;
`;
