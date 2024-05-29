import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CancelButton from '../atoms/CancelButton';
import MovieGrade from '../atoms/MovieGrade';

export interface MovieCardProps {
  id: number;
  isMypage?: boolean;
  movieImg: string;
  title: string;
  date?: number;
  grade: number;
  isLiked?: boolean;
  onCancelClick?: (id: number) => void;
}

const MovieCard = ({
  id,
  isMypage,
  movieImg,
  title,
  date,
  grade,
  isLiked,
  onCancelClick,
}: MovieCardProps) => {
  return (
    <CardContainer>
      {isMypage ? (
        <Link to={`/movies/${id}`}>
          <CardImage src={movieImg} />
        </Link>
      ) : (
        <CardImage src={movieImg} />
      )}
      <ContentContainer>
        {isMypage ? (
          <Link to={`/movies/${id}`}>
            <ContentBox>
              <MovieTitle>{title}</MovieTitle>
              <MovieDate>{date}</MovieDate>
              <MovieGrade grade={grade} />
            </ContentBox>
          </Link>
        ) : (
          <ContentBox>
            <MovieTitle>{title}</MovieTitle>
            <MovieDate>{date}</MovieDate>
            <MovieGrade grade={grade} />
          </ContentBox>
        )}
        {!isLiked && onCancelClick && (
          <CancelButton onCancelClick={() => onCancelClick(id)} />
        )}
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
  align-items: center;
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
  margin-bottom: 4px;
`;

const MovieDate = styled.div`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 14px;
`;
