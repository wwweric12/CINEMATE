import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import SignupTemplate from '../components/template/SignupTemplate';
import { AuthFormValues } from '../types/auth';
import { authDuplicatedFetcher, authFetcher } from '../api/authFetcher';

const SignupPage = () => {
  const navigate = useNavigate();
  const [nameCheck, setNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value.trim();
    if (data.length > 0) {
      if (e.target.name === 'nickName') {
        const state = await authDuplicatedFetcher({
          data,
          path: 'nickname',
        });
        setNameCheck(state.data);
      } else if (e.target.name === 'email') {
        const state = await authDuplicatedFetcher({
          data,
          path: 'email',
        });
        setEmailCheck(state.data);
      }
    }
  };

  const handleSignupSubmit: SubmitHandler<AuthFormValues> = async (
    data: AuthFormValues,
  ) => {
    const res = await authFetcher({ data, path: 'sign-up' });
    if (res.status === 200) {
      navigate('/signup/success');
    } else {
      alert(res.data);
    }
  };

  return (
    <>
      <SignupTemplate
        nameCheck={nameCheck}
        emailCheck={emailCheck}
        onInputChange={handleInputChange}
        onSignupSubmit={handleSignupSubmit}
      />
    </>
  );
};

export default SignupPage;
