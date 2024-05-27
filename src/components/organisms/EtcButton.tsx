import styled from 'styled-components';
import union from '../../assets/images/union.svg';
import PrimaryButton, { PrimaryButtonProps } from '../atoms/PrimaryButton';

interface EtcButtonProps {
  onModifyClick: () => void;
  onDeleteClick: () => void;
}

const EtcButton = ({ onModifyClick, onDeleteClick }: EtcButtonProps) => {
  const REVIEW_SETTING: PrimaryButtonProps[] = [
    {
      type: 'button',
      children: '수정하기',
      onClick: () => {
        onModifyClick();
      },
      state: false,
      size: 'small',
    },
    {
      type: 'button',
      children: '삭제하기',
      onClick: () => {
        onDeleteClick();
      },
      state: true,
      size: 'small',
    },
  ];

  return (
    <>
      <ButtonContainer>
        <EtcBackgroundImg src={union} />
        {REVIEW_SETTING.map((item, i) => (
          <PrimaryButton
            key={i}
            type={item.type}
            onClick={item.onClick}
            state={item.state}
            enabled
            size="small"
          >
            {item.children}
          </PrimaryButton>
        ))}
      </ButtonContainer>
    </>
  );
};

export default EtcButton;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const EtcBackgroundImg = styled.img`
  position: absolute;
  z-index: -1;
  margin-bottom: 4px;
`;
