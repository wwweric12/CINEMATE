import styled from 'styled-components';

interface MovieMemberProps {
  image?: string;
  name: string;
}

const MovieMember = ({ image, name }: MovieMemberProps) => {
  return (
    <MovieMemberContainer>
      <MemberImage src={image} />
      <MemberName>{name}</MemberName>
    </MovieMemberContainer>
  );
};

export default MovieMember;

const MovieMemberContainer = styled.div`
  display: flex;
  width: 54px;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const MemberImage = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
`;

const MemberName = styled.div`
  font-size: 12px;
  font-weight: 500;
`;
