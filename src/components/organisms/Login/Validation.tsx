import * as yup from 'yup';
export const validation = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
      '이메일 형식을 맞춰서 입력해주세요.',
    ),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .min(4, '비밀번호를 6~14자로 입력해주세요.')
    .max(16, '비밀번호를 6~14자로 입력해주세요.')
    .matches(
      /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{6,14}/,
      '비밀번호에 영문, 숫자, 특수문자를 포함해주세요.',
    ),
});
