import * as yup from 'yup';
export const validation = yup.object().shape({
  email: yup.string().required('이메일을 입력해주세요'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .min(4, '비밀번호를 4~16자로 입력해주세요.')
    .max(16, '비밀번호를 4~16자로 입력해주세요.')
    .matches(
      /^(?=.*[a-zA-Z0-9]).{4,16}$/,
      '비밀번호에 영문, 숫자, 특수문자를 포함해주세요.',
    ),
});
