import styled from 'styled-components';
import { ReactComponent as HomeSvg } from '../../assets/images/footer_home.svg';
import { ReactComponent as SearchSvg } from '../../assets/images/footer_search.svg';
import { ReactComponent as UserSvg } from '../../assets/images/footer_user.svg';
import { theme } from '../../styles/theme';

export interface FooterButtonProps {
  text: string;
  type: 'home' | 'search' | 'mypage';
  path?: '/' | '/search' | '/mypage';
  isSelected?: boolean;
  onClick: () => void;
}

const FooterButton = ({
  text,
  isSelected,
  type,
  onClick,
}: FooterButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {type === 'home' && <HomeImg $isSelected={isSelected} />}
      {type === 'mypage' && <UserImg $isSelected={isSelected} />}
      {type === 'search' && <SearchImg $isSelected={isSelected} />}
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

const HomeImg = styled(HomeSvg)<{
  $isSelected: FooterButtonProps['isSelected'];
}>`
  path {
    fill: ${({ $isSelected }) =>
      $isSelected ? theme.colors.choral : theme.colors.gray2};
  }
`;
const UserImg = styled(UserSvg)<{
  $isSelected: FooterButtonProps['isSelected'];
}>`
  path {
    fill: ${({ $isSelected }) =>
      $isSelected ? theme.colors.choral : theme.colors.gray2};
  }
`;
const SearchImg = styled(SearchSvg)<{
  $isSelected: FooterButtonProps['isSelected'];
}>`
  path {
    fill: ${({ $isSelected }) =>
      $isSelected ? theme.colors.choral : theme.colors.gray2};
  }
`;

const ButtonField = styled.div<{
  $isSelected: FooterButtonProps['isSelected'];
}>`
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.choral : theme.colors.gray2};
  font-size: 12px;
`;
