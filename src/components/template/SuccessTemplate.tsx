import styled from 'styled-components';
import { ReactComponent as SuccessSvg } from '../../assets/images/big_check.svg';
import PrimaryButton from '../atoms/PrimaryButton';
import Description from '../atoms/Description';

interface SuccessTemplateProps {
  state: 'signup' | 'survey';
  mainText: string;
  description: string;
  buttonText: string;
  onMovePage: () => void;
}

const SuccessTemplate = ({
  onMovePage,
  state,
  mainText,
  description,
  buttonText,
}: SuccessTemplateProps) => {
  return (
    <TemplateContainer>
      <FieldContainer>
        <SuccessImg />
        <Description title={mainText} content={description} state={state} />
      </FieldContainer>
      <PrimaryButton
        type="button"
        size="large"
        state
        enabled
        onClick={onMovePage}
      >
        {buttonText}
      </PrimaryButton>
    </TemplateContainer>
  );
};

export default SuccessTemplate;

const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 260px 40px 80px 40px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 230px;
`;

const SuccessImg = styled(SuccessSvg)`
  margin-bottom: 30px;
`;
