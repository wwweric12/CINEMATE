import styled from 'styled-components';
import { ReactComponent as ChevronSvg } from '../../assets/images/chevron.svg';

interface DetailHeaderProps {
  title?: string;
  onClick: () => void;
}

const DetailHeader = ({ title, onClick }: DetailHeaderProps) => {
  return (
    <HeaderContainer>
      <PrevButton onClick={onClick}>
        <ChevronImg />
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

const ChevronImg = styled(ChevronSvg)`
  margin-right: 12px;
`;

const PrevTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
