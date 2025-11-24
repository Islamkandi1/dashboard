export interface SignUp {
  data: dataType | null;
  error: error;
}
export interface dataType {
  user: {
    id: string;
  } | null;
  session: object | null;
}
export interface error {
  code: string;
  name: string;
  status: number;
  __isAuthError: boolean;
  message: string;
  stack: string;
}
