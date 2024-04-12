import styled from 'styled-components';
import { ReactComponent as StarSvg } from '../../assets/images/star.svg';

interface ReviewGradeProps {
  grade: number;
}

const ReviewGrade = ({ grade }: ReviewGradeProps) => {
  return (
    <ReviewGradeContainer>
      <StarImg />
      <GradePoint>{grade}</GradePoint>
    </ReviewGradeContainer>
  );
};

export default ReviewGrade;

const ReviewGradeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background-color: rgba(217, 217, 217, 0.1);
  border-radius: 5px;
  width: fit-content;
`;

const StarImg = styled(StarSvg)`
  path {
    fill: ${({ theme }) => theme.colors.choral};
  }
  margin-right: 6px;
`;

const GradePoint = styled.div`
  color: white;
  font-size: 10px;
`;
