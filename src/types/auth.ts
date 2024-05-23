export interface AuthFormValues {
  email: string;
  password: string;
  nickName?: string;
}

export interface LoginResponse {
  status: number;
  message: string;
  data: Data;
}

export interface Data {
  accessToken: string;
  survey: boolean;
}
