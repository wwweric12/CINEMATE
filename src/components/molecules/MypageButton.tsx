import styled from 'styled-components';
import next from '../../assets/images/next.svg';

interface MypageProps {
  content: string;
  count: number;
}

const MypageButton = ({ content, count }: MypageProps) => {
  return (
    <ButtonContainer>
      <ContentContainer>
        <ButtonContent>{content}</ButtonContent>
        <ContentCount>{count}</ContentCount>
      </ContentContainer>
      <NextImg src={next} />
    </ButtonContainer>
  );
};

export default MypageButton;

const ButtonContainer = styled.button`
  min-width: 280px;
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.darkgray4};
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  margin-right: 8px;
`;

const ButtonContent = styled.div``;

const ContentCount = styled.div``;

const NextImg = styled.img``;
