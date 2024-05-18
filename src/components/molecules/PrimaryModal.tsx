import styled from 'styled-components';
import { ReactComponent as CheckSvg } from '../../assets/images/modal_check.svg';
import { ReactComponent as WarningSvg } from '../../assets/images/modal_warn.svg';
import PrimaryButton from '../atoms/PrimaryButton';

interface PrimaryModalProps {
  state: 'warn' | 'check';
  fieldText: string;
  cancelText: string;
  checkText: string;
}

const PrimaryModal = ({
  state,
  fieldText,
  cancelText,
  checkText,
}: PrimaryModalProps) => {
  return (
    <ModalContainer>
      {state === 'check' && <CheckSvg />}
      {state === 'warn' && <WarningSvg />}
      <ModalField>{fieldText}</ModalField>
      <ButtonContainer>
        <PrimaryButton size="medium" state={false}>
          {cancelText}
        </PrimaryButton>
        <PrimaryButton size="medium" state>
          {checkText}
        </PrimaryButton>
      </ButtonContainer>
    </ModalContainer>
  );
};

export default PrimaryModal;

const ModalContainer = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  padding: 30px 24px 16px 24px;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const ModalField = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 6px;
`;
