import { User } from "@/modules/users/types/user.types";

// Representa las credenciales necesarias para el inicio de sesión
export interface Credentials {
  email: string;
  password: string;
}

// Representa el token de autenticación devuelto tras un inicio de sesión exitoso
export type AuthToken = string;

export interface AuthResponse {
  token: AuthToken;
  user: User;
}
