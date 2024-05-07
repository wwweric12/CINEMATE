import styled from 'styled-components';

interface DescriptionProps {
  title: string;
  content: string;
  state?: 'survey' | 'signup';
}

const Description = ({ title, content, state }: DescriptionProps) => {
  return (
    <DescriptionContainer>
      <Title state={state}>{title}</Title>
      <Content>{content}</Content>
    </DescriptionContainer>
  );
};

export default Description;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div<{ state: DescriptionProps['state'] }>`
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: ${({ state }) => {
    if (state === 'survey') {
      return '12px';
    } else if (state === 'signup') {
      return '14px';
    }
  }};
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray1};
`;
