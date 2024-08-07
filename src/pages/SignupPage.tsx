import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import SignupTemplate from '../components/template/SignupTemplate';
import { AuthFormValues } from '../types/auth';
import { authDuplicatedFetcher, authFetcher } from '../api/authFetcher';
import { useDebounce } from '../hooks/useDebounce';


const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameCheck, setNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  const debouncedName = useDebounce(name, 300);
  const debouncedEmail = useDebounce(email, 300);
  
  useEffect(() => {
    const checkName = async () => {
      if (debouncedName) {
        const state = await authDuplicatedFetcher({
          data: debouncedName,
          path: 'nickname',
        });
        setNameCheck(state.data);
      }
    };
    checkName();
  }, [debouncedName]);

  useEffect(() => {
    const checkEmail = async () => {
      if (debouncedEmail) {
        const state = await authDuplicatedFetcher({
          data: debouncedEmail,
          path: 'email',
        });
        setEmailCheck(state.data);
      }
    };
    checkEmail();
  }, [debouncedEmail]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value.trim();
    if (e.target.name === 'nickName') {
      setName(data);
    } else if (e.target.name === 'email') {
      setEmail(data);
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
