import styled from 'styled-components';
import prevSvg from '../../assets/images/prev.svg';

interface DetailHeaderProps {
  title?: string;
  onClick: () => void;
}

const DetailHeader = ({ title, onClick }: DetailHeaderProps) => {
  return (
    <HeaderContainer>
      <PrevButton onClick={onClick}>
        <PrevImg src={prevSvg} />
        <PrevTitle>{title}</PrevTitle>
      </PrevButton>
    </HeaderContainer>
  );
};

export default DetailHeader;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

const PrevButton = styled.button`
  display: flex;
  align-items: center;
`;

const PrevImg = styled.img`
  margin-right: 12px;
`;

const PrevTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;
