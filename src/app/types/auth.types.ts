export type AuthToken = {
  token: string;
};

export type InputEmailProps = {
  email: string;
};

export type RegisterResponseType = {
  account_id: number;
  email: string;
  user_id: number;
};

export type InputPasswordProps = {
  email?: string;
  password: string;
};

export type FormData = {
  firstname: string;
  lastname: string;
  dni: number;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

export type InputPasswordPropsType = {
  fieldName: string;
};

export type InputTextProps = {
  type: "text" | "password" | "number" | "email";
  placeholder?: string;
  fieldName: string;
};

export type UserData = {
  username: string,
  email: string,
  exp: number
}