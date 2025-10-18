// Representa las credenciales necesarias para el inicio de sesión
export interface Credentials {
  email: string;
  password: string;
}

// Representa el token de autenticación devuelto tras un inicio de sesión exitoso
export type AuthToken = string;

// Representa la información del usuario autenticado
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface AuthResponse {
  token: AuthToken;
  user: User;
}
