import styled from 'styled-components';
import MovieGrade from '../atoms/MovieGrade';
import HeartButton from '../atoms/HeartButton';

interface MovieListCardProps {
  img: string;
  title: string;
  grade: number;
  isLiked?: boolean;
}

const MovieListCard = ({ img, title, grade, isLiked }: MovieListCardProps) => {
  const handleHeart = () => {};
  return (
    <CardContainer>
      <MovieImg src={img} />
      <ContentContainer>
        <ContentBox>
          <Title>{title}</Title>
          <MovieGrade grade={grade} />
        </ContentBox>
        <HeartButton isLiked={isLiked} onClick={handleHeart} />
      </ContentContainer>
    </CardContainer>
  );
};

export default MovieListCard;

const CardContainer = styled.div`
  width: 140px;
  height: 244px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkgray3};
`;

const MovieImg = styled.img`
  width: 100%;
  height: 190px;
  border-radius: 10px 10px 0 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 8px;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Title = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 500;
  max-height: 30px;
  margin-bottom: 6px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-right: 4px;
`;
