import styled from 'styled-components';
import { ReactComponent as HomeSvg } from '../../assets/images/footer_home.svg';
import { ReactComponent as SearchSvg } from '../../assets/images/footer_search.svg';
import { ReactComponent as UserSvg } from '../../assets/images/footer_user.svg';
import { theme } from '../../styles/theme';

export interface FooterButtonProps {
  text: string;
  type: 'home' | 'search' | 'mypage';
  isSelected?: boolean;
  onClick: () => void;
}

const FooterButton = ({
  text,
  isSelected,
  type,
  onClick,
}: FooterButtonProps) => {
  let color;
  if (isSelected) {
    color = theme.colors.choral;
  } else {
    color = theme.colors.gray2;
  }
  return (
    <ButtonContainer onClick={onClick}>
      {type === 'home' && <HomeSvg fill={color} />}
      {type === 'mypage' && <UserSvg fill={color} />}
      {type === 'search' && <SearchSvg fill={color} />}
      <ButtonField $isSelected={isSelected}>{text}</ButtonField>
    </ButtonContainer>
  );
};

export default FooterButton;

const ButtonContainer = styled.button`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const ButtonField = styled.div<{
  $isSelected: FooterButtonProps['isSelected'];
}>`
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.choral : theme.colors.gray2};
  font-size: 12px;
`;
