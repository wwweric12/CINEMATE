import styled from 'styled-components';
import { ReactComponent as NoReviewSvg } from '../../assets/images/noreview.svg';

interface NoReviewCardProps {
  title: string;
  desc: string;
}

const NoReviewCard = ({ title, desc }: NoReviewCardProps) => {
  return (
    <CardContainer>
      <NoReviewImg />
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{desc}</Description>
      </ContentContainer>
    </CardContainer>
  );
};

export default NoReviewCard;

const CardContainer = styled.div`
  width: 100%;
  height: 416px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.darkgray4};
`;

const NoReviewImg = styled(NoReviewSvg)`
  margin-bottom: 26px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray2};
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray2};
`;
