import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import FooterButtons, { FooterButtonProps } from '../atoms/FooterButton';

interface FooterProps {
  path: string;
}

const Footer = ({ path }: FooterProps) => {
  const navigate = useNavigate();
  const footer: FooterButtonProps[] = [
    {
      type: 'home',
      text: '홈',
      path: '/',
      onClick: () => {
        navigate('/');
      },
    },
    {
      type: 'search',
      text: '검색',
      path: '/search',
      onClick: () => {
        navigate('/search');
      },
    },
    {
      type: 'mypage',
      text: '마이페이지',
      path: '/mypage',
      onClick: () => {
        navigate('/mypage');
      },
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
          isSelected={item.path === path}
        />
      ))}
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 768px;
  position: fixed;
  bottom: 0;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.darkgray1};
`;
