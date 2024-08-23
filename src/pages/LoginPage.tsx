import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LoginTemplate from '../components/template/LoginTemplate';
import { authFetcher } from '../api/authFetcher';
import { AuthFormValues } from '../types/auth';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLoginSubmit: SubmitHandler<AuthFormValues> = async (
    data: AuthFormValues,
  ) => {
    const res = await authFetcher({ data, path: 'sign-in' });
    if (res.status === 200) {
      localStorage.setItem('accessToken', res.data.accessToken);
      if (res.data.survey) {
        navigate('/');
      } else {
        navigate('/survey/genre');
      }
    }
  };
  return (
    <>
      <LoginTemplate onLoginSubmit={handleLoginSubmit} />
    </>
  );
};

export default LoginPage;
