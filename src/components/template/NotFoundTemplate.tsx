import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NotFoundCard from '../molecules/NotFoundCard';

const NotFoundTemplate = () => {
  const navigate = useNavigate();

  const handleLeftClick = () => {
    navigate(-1);
  };

  const handleRightClick = () => {
    navigate('/');
  };

  return (
    <TemplateContainter>
      <NotFoundCard
        cardTitle="404 ERROR"
        contentTitle="Page Not Found"
        contentDesc="페이지를 찾을 수 없습니다"
        cardDesc="페이지가 존재하지 않거나 사용할 수 없는 페이지입니다"
        leftBtnDesc="이전 페이지로"
        rightBtnDesc="홈으로"
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
      />
    </TemplateContainter>
  );
};

export default NotFoundTemplate;

const TemplateContainter = styled.div`
  display: flex;
  justify-content: center;
  padding: 150px 27px;
`;
