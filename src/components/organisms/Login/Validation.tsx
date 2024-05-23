import * as yup from 'yup';
export const validation = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .matches(
      /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/,
      '이메일형식으로 입력해주세요',
    ),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .min(4, '비밀번호를 4~16자로 입력해주세요.')
    .max(16, '비밀번호를 4~16자로 입력해주세요.')
    .matches(
      /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,14}/,
      '비밀번호에 영문, 숫자, 특수문자를 포함해주세요.',
    ),
});
