import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as SuccessSvg } from '../../assets/images/big_check.svg';
import PrimaryButton from '../atoms/PrimaryButton';
import Description from '../atoms/Description';

interface SuccessValue {
  state: 'signup' | 'survey';
  mainText: string;
  description: string;
  buttonText: string;
}

const SUCCESS_VALUE: SuccessValue[] = [
  {
    state: 'signup',
    mainText: '회원가입이 완료되었습니다',
    description: '서비스를 이용하실 수 있습니다',
    buttonText: '로그인',
  },
  {
    state: 'survey',
    mainText: '사용자 맞춤 설정이 완료되었습니다.',
    description: '추천된 영화를 즐겨보세요!',
    buttonText: '메인페이지로 이동',
  },
];

const SucessTemplate = () => {
  const successPath = ['/signup/success', '/survey/success'];
  const location = useLocation();
  const navigate = useNavigate();

  const data =
    location.pathname === successPath[0] ? SUCCESS_VALUE[0] : SUCCESS_VALUE[1];

  const handleMovePage = () => {
    if (location.pathname === successPath[0]) {
      navigate('/login');
    } else if (location.pathname === successPath[1]) {
      navigate('/');
    }
  };
  return (
    <TemplateContainer>
      <FieldContainer>
        <SuccessImg />
        <Description
          title={data.mainText}
          content={data.description}
          state={data.state}
        />
      </FieldContainer>
      <PrimaryButton
        type="button"
        size="large"
        state={true}
        onClick={handleMovePage}
      >
        {data.buttonText}
      </PrimaryButton>
    </TemplateContainer>
  );
};

export default SucessTemplate;

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
