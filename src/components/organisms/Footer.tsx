import styled from 'styled-components';
import FooterButtons, { FooterButtonProps } from '../atoms/FooterButton';

const Footer = () => {
  const footer: FooterButtonProps[] = [
    {
      type: 'home',
      text: '홈',
      isSelected: true,
      onClick: () => {},
    },
    {
      type: 'search',
      text: '검색',
      isSelected: false,
      onClick: () => {},
    },
    {
      type: 'mypage',
      text: '마이페이지',
      isSelected: false,
      onClick: () => {},
    },
  ];

  return (
    <FooterContainer>
      {footer.map((item) => (
        <FooterButtons
          onClick={item.onClick}
          key={item.type}
          type={item.type}
          text={item.text}
          isSelected={item.isSelected}
        />
      ))}
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkgray1};
`;
