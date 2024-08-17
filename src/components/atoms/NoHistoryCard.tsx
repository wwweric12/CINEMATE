import styled from 'styled-components';
import { ReactComponent as NoHistorySvg } from '../../assets/images/small_not_exist.svg';

interface NoHistoryCardProps {
  title: string;
}

const NoHistoryCard = ({ title }: NoHistoryCardProps) => {
  return (
    <CardContainer>
        <ContentContainer>
            <NoHistorySvg />
            <Title>{title}</Title>
        </ContentContainer>
    </CardContainer>
  );
};

export default NoHistoryCard;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 84px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.darkgray4};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 14px;
  line-height: 20px;    
  color: ${({ theme }) => theme.colors.gray2};
`;
