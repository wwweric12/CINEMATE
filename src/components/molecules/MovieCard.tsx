import styled from 'styled-components';
import CancleButton from '../atoms/CancelButton';
import MovieGrade from '../atoms/MovieGrade';

interface MovieCardProps {
  movieImg: string;
  title: string;
  date: number;
  grade: number;
  isLike?: boolean;
  onClick: () => void;
}

const MovieCard = ({
  movieImg,
  title,
  date,
  grade,
  isLike,
  onClick,
}: MovieCardProps) => {
  return (
    <CardContainer>
      <CardImage src={movieImg} />
      <ContentContainer>
        <ContentBox>
          <MovieTitle>{title}</MovieTitle>
          <MovieDate>{date}</MovieDate>
          <MovieGrade grade={grade} />
        </ContentBox>
        {isLike && <CancleButton onClick={onClick} />}
      </ContentContainer>
    </CardContainer>
  );
};

export default MovieCard;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 14px;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  border-radius: 10px;
`;

const CardImage = styled.img`
  width: 60px;
  height: 80px;
  margin-right: 16px;
  border-radius: 4px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
`;

const MovieTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 4px;
`;

const MovieDate = styled.div`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 14px;
`;
