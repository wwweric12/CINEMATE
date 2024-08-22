import styled from 'styled-components';
import { ReactComponent as NotFoundSvg } from '../../assets/images/not_found.svg';
import PrimaryButton from '../atoms/PrimaryButton';

interface NotFoundCard {
  cardTitle: string;
  contentTitle: string;
  contentDesc: string;
  cardDesc: string;
  leftBtnDesc: string;
  rightbtnDesx: string;
  onNavigateClick: () => void;
}

const NotFoundCard = ({
  cardTitle,
  contentTitle,
  contentDesc,
  cardDesc,
  leftBtnDesc,
  rightbtnDesx,
  onNavigateClick,
}: NotFoundCard) => {
  return (
    <CardContainer>
      <CardTitle>{cardTitle}</CardTitle>
      <CardContentBox>
        <NotFoundSvg />
        <ContentTitle>{contentTitle}</ContentTitle>
        <ContentDesc>{contentDesc}</ContentDesc>
      </CardContentBox>
      <CardDesc>{cardDesc}</CardDesc>
      <ButtonContainer>
        <PrimaryButton
          type="button"
          onClick={onNavigateClick}
          state={false}
          size="small"
        >
          {leftBtnDesc}
        </PrimaryButton>
        <PrimaryButton
          type="button"
          onClick={onNavigateClick}
          state
          size="small"
        >
          {rightbtnDesx}
        </PrimaryButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default NotFoundCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 306px;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  border-radius: 14px;
  padding: 84px 0 54px 0;
`;

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.gray2};
  margin-bottom: 27px;
`;

const CardContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18px;
`;

const ContentTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray2};
  margin-top: 18px;
`;

const ContentDesc = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray2};
  margin-top: 12px;
`;

const CardDesc = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray2};
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
