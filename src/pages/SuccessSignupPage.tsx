import { useNavigate } from 'react-router-dom';
import SuccessTemplate from '../components/template/SuccessTemplate';

const SuccessSignupPage = () => {
  const navigate = useNavigate();
  const handleMovePage = () => {
    navigate('/login');
  };

  return (
    <SuccessTemplate
      onMovePage={handleMovePage}
      state="signup"
      mainText="회원가입이 완료되었습니다"
      description="서비스를 이용하실 수 있습니다"
      buttonText="로그인"
    />
  );
};

export default SuccessSignupPage;
