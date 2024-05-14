import styled from 'styled-components';

interface SearchCardProps {
  movieImg: string;
  title: string;
}
const SearchCard = ({ movieImg, title }: SearchCardProps) => {
  return (
    <SearchCardContainer>
      <MovieImg src={movieImg} />
      <MovieTitle>{title}</MovieTitle>
    </SearchCardContainer>
  );
};

export default SearchCard;

const SearchCardContainer = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  border-radius: 6px;
`;

const MovieImg = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 6px;
  margin-right: 24px;
`;

const MovieTitle = styled.div`
  width: 100%;
  font-size: 14px;
`;
