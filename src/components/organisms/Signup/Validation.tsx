import * as yup from 'yup';
export const validation = yup.object().shape({
  name: yup
    .string()
    .required('닉네임을 입력해주세요.')
    .min(2, '닉네임을 2~8글자이내로 작성해주세요.')
    .max(8, '닉네임을 2~8글자이내로 작성해주세요.'),
  email: yup
    .string()
    .required('이메일을 다시입력해주세요')
    .email('이메일 형식을 맞춰서 입력해주세요.'),
  password: yup
    .string()
    .min(4, '비밀번호를 4~16자로 입력해주세요.')
    .max(16, '비밀번호를 4~16자로 입력해주세요.')
    .required('비밀번호를 다시입력해주세요')
    .matches(
      /^(?=.*[a-zA-Z0-9]).{4,16}$/,
      '비밀번호에 영문, 숫자, 특수문자를 포함해주세요.',
    ),
});
