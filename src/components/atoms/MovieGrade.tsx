import styled from 'styled-components';
import starSvg from '../../assets/images/star.svg';

interface MovieGradeProps {
  grade: number;
}

const MovieGrade = ({ grade }: MovieGradeProps) => {
  return (
    <MovieGradeContainer>
      <StarSvg src={starSvg} />
      <Grade>{grade}</Grade>
    </MovieGradeContainer>
  );
};

export default MovieGrade;

const MovieGradeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StarSvg = styled.img`
  margin-right: 4px;
`;

const Grade = styled.div`
  color: white;
  font-size: 10px;
`;
